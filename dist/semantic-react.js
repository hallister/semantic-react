(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("React.addons.ReactTransitionGroup"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "React.addons.ReactTransitionGroup", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["SemanticReact"] = factory(require("React"), require("React.addons.ReactTransitionGroup"), require("ReactDOM"));
	else
		root["SemanticReact"] = factory(root["React"], root["React.addons.ReactTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_55__) {
return /******/ (function(modules) { // webpackBootstrap
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

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _elements = __webpack_require__(1);

	var elements = _interopRequireWildcard(_elements);

	var _modules = __webpack_require__(41);

	var modules = _interopRequireWildcard(_modules);

	var _utilities = __webpack_require__(4);

	var utilites = _interopRequireWildcard(_utilities);

	var _views = __webpack_require__(62);

	var views = _interopRequireWildcard(_views);

	var _collections = __webpack_require__(89);

	var collections = _interopRequireWildcard(_collections);

	exports.elements = elements;
	exports.modules = modules;
	exports.utilites = utilites;
	exports.views = views;
	exports.collections = collections;

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

	var _elementsButtonButtons = __webpack_require__(6);

	exports.Buttons = _interopRequire(_elementsButtonButtons);

	var _elementsButtonLabeledbutton = __webpack_require__(7);

	exports.LabeledButton = _interopRequire(_elementsButtonLabeledbutton);

	var _elementsButtonIconbutton = __webpack_require__(8);

	exports.IconButton = _interopRequire(_elementsButtonIconbutton);

	var _elementsButtonSocialbutton = __webpack_require__(9);

	exports.SocialButton = _interopRequire(_elementsButtonSocialbutton);

	var _elementsButtonPrimarybutton = __webpack_require__(10);

	exports.PrimaryButton = _interopRequire(_elementsButtonPrimarybutton);

	var _elementsButtonSuccessbutton = __webpack_require__(11);

	exports.SuccessButton = _interopRequire(_elementsButtonSuccessbutton);

	var _elementsButtonWarningbutton = __webpack_require__(12);

	exports.WarningButton = _interopRequire(_elementsButtonWarningbutton);

	var _elementsButtonDangerbutton = __webpack_require__(13);

	exports.DangerButton = _interopRequire(_elementsButtonDangerbutton);

	var _elementsDividerDivider = __webpack_require__(14);

	exports.Divider = _interopRequire(_elementsDividerDivider);

	var _elementsFlagFlag = __webpack_require__(15);

	exports.Flag = _interopRequire(_elementsFlagFlag);

	var _elementsHeaderHeader = __webpack_require__(16);

	exports.Header = _interopRequire(_elementsHeaderHeader);

	var _elementsHeaderSubheader = __webpack_require__(17);

	exports.SubHeader = _interopRequire(_elementsHeaderSubheader);

	var _elementsIconIcon = __webpack_require__(18);

	exports.Icon = _interopRequire(_elementsIconIcon);

	var _elementsIconIcons = __webpack_require__(19);

	exports.Icons = _interopRequire(_elementsIconIcons);

	var _elementsImageImage = __webpack_require__(20);

	exports.Image = _interopRequire(_elementsImageImage);

	var _elementsImageImages = __webpack_require__(21);

	exports.Images = _interopRequire(_elementsImageImages);

	var _elementsInputInput = __webpack_require__(22);

	exports.Input = _interopRequire(_elementsInputInput);

	var _elementsLabelDetail = __webpack_require__(23);

	exports.Detail = _interopRequire(_elementsLabelDetail);

	var _elementsLabelLabel = __webpack_require__(24);

	exports.Label = _interopRequire(_elementsLabelLabel);

	var _elementsLabelLabels = __webpack_require__(25);

	exports.Labels = _interopRequire(_elementsLabelLabels);

	var _elementsListList = __webpack_require__(26);

	exports.List = _interopRequire(_elementsListList);

	var _elementsLoaderLoader = __webpack_require__(27);

	exports.Loader = _interopRequire(_elementsLoaderLoader);

	var _elementsRailRail = __webpack_require__(28);

	exports.Rail = _interopRequire(_elementsRailRail);

	var _elementsRevealReveal = __webpack_require__(29);

	exports.Reveal = _interopRequire(_elementsRevealReveal);

	var _elementsSegmentSegment = __webpack_require__(30);

	exports.Segment = _interopRequire(_elementsSegmentSegment);

	var _elementsSegmentSegments = __webpack_require__(31);

	exports.Segments = _interopRequire(_elementsSegmentSegments);

	var _elementsSimpleActions = __webpack_require__(32);

	exports.Actions = _interopRequire(_elementsSimpleActions);

	var _elementsSimpleAuthor = __webpack_require__(33);

	exports.Author = _interopRequire(_elementsSimpleAuthor);

	var _elementsSimpleContainer = __webpack_require__(34);

	exports.Container = _interopRequire(_elementsSimpleContainer);

	var _elementsSimpleContent = __webpack_require__(35);

	exports.Content = _interopRequire(_elementsSimpleContent);

	var _elementsSimpleDate = __webpack_require__(36);

	exports.Date = _interopRequire(_elementsSimpleDate);

	var _elementsSimpleDescription = __webpack_require__(37);

	exports.Description = _interopRequire(_elementsSimpleDescription);

	var _elementsSimpleMeta = __webpack_require__(38);

	exports.Meta = _interopRequire(_elementsSimpleMeta);

	var _elementsSimpleSummary = __webpack_require__(39);

	exports.Summary = _interopRequire(_elementsSimpleSummary);

	var _elementsSimpleText = __webpack_require__(40);

	exports.Text = _interopRequire(_elementsSimpleText);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	        value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	        animated: ['vertical', 'fade'],
	        attached: ['left', 'right', 'bottom', 'top'],
	        labeled: ['right', 'left'],
	        floated: ['right', 'left']
	};

	var Button = (function (_React$Component) {
	        _inherits(Button, _React$Component);

	        function Button() {
	                _classCallCheck(this, Button);

	                _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
	        }

	        _createClass(Button, [{
	                key: 'isIconButton',
	                value: function isIconButton() {
	                        return (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react2['default'].Children.count(this.props.children) === 1;
	                }
	        }, {
	                key: 'render',
	                value: function render() {
	                        var Component = this.props.attached || this.context.isAttached || this.props.animated || _react2['default'].Children.count(this.props.children) > 1 ? 'div' : 'button';

	                        // consume props
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

	                        // add class names
	                        other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

	                        return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
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

	        return Button;
	})(_react2['default'].Component);

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

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

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};

	var Buttons = (function (_React$Component) {
	    _inherits(Buttons, _React$Component);

	    function Buttons() {
	        _classCallCheck(this, Buttons);

	        _get(Object.getPrototypeOf(Buttons.prototype), 'constructor', this).apply(this, arguments);
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

	    return Buttons;
	})(_react2['default'].Component);

	exports['default'] = Buttons;
	module.exports = exports['default'];

/***/ },
/* 7 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var LabeledButton = (function (_React$Component) {
	    _inherits(LabeledButton, _React$Component);

	    function LabeledButton() {
	        _classCallCheck(this, LabeledButton);

	        _get(Object.getPrototypeOf(LabeledButton.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(LabeledButton, [{
	        key: 'renderButton',

	        /*
	         *  Handles buttons with an image for a label
	         */
	        value: function renderButton() {
	            var other = _objectWithoutProperties(this.props, []);

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
	            var _props = this.props;
	            var labeled = _props.labeled;

	            var other = _objectWithoutProperties(_props, ['labeled']);

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

	    return LabeledButton;
	})(_react2['default'].Component);

	exports['default'] = LabeledButton;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

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
	    name: _react2['default'].PropTypes.string
	};

	exports['default'] = SocialButton;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	// Currently header/dividers are only headers. Maybe do both?

	var Divider = (function (_React$Component) {
	    _inherits(Divider, _React$Component);

	    function Divider() {
	        _classCallCheck(this, Divider);

	        _get(Object.getPrototypeOf(Divider.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Divider, [{
	        key: 'render',
	        value: function render() {
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

	    return Divider;
	})(_react2['default'].Component);

	exports['default'] = Divider;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};

	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
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

	    return Header;
	})(_react2['default'].Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var SubHeader = (function (_React$Component) {
	    _inherits(SubHeader, _React$Component);

	    function SubHeader() {
	        _classCallCheck(this, SubHeader);

	        _get(Object.getPrototypeOf(SubHeader.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(SubHeader, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;

	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses']);

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

	    return SubHeader;
	})(_react2['default'].Component);

	exports['default'] = SubHeader;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    flipped: ['horizontally', 'vertically'],
	    rotated: ['clockwise', 'counterclockwise']
	};

	var Icon = (function (_React$Component) {
	    _inherits(Icon, _React$Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
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

	    return Icon;
	})(_react2['default'].Component);

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _icon = __webpack_require__(18);

	var _icon2 = _interopRequireDefault(_icon);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    flipped: ['horizontally', 'vertically'],
	    rotated: ['clockwise', 'counterclockwise']
	};

	var Icons = (function (_React$Component) {
	    _inherits(Icons, _React$Component);

	    function Icons() {
	        _classCallCheck(this, Icons);

	        _get(Object.getPrototypeOf(Icons.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Icons, [{
	        key: 'render',
	        value: function render() {
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

	    return Icons;
	})(_react2['default'].Component);

	exports['default'] = Icons;
	module.exports = exports['default'];

/***/ },
/* 20 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left'],
	    spaced: ['right', 'left']
	};

	// can't do SVG since JSX/React breaks on SVG images

	var Image = (function (_React$Component) {
	    _inherits(Image, _React$Component);

	    function Image() {
	        _classCallCheck(this, Image);

	        _get(Object.getPrototypeOf(Image.prototype), 'constructor', this).apply(this, arguments);
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

	    return Image;
	})(_react2['default'].Component);

	exports['default'] = Image;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Images = (function (_React$Component) {
	    _inherits(Images, _React$Component);

	    function Images() {
	        _classCallCheck(this, Images);

	        _get(Object.getPrototypeOf(Images.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Images, [{
	        key: 'render',
	        value: function render() {
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

	    return Images;
	})(_react2['default'].Component);

	exports['default'] = Images;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Input = (function (_React$Component) {
	    _inherits(Input, _React$Component);

	    function Input() {
	        _classCallCheck(this, Input);

	        _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Input, [{
	        key: 'renderText',
	        value: function renderText() {
	            // see if icon and label are children
	            this.processChildren();

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

	    return Input;
	})(_react2['default'].Component);

	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Detail = (function (_React$Component) {
	    _inherits(Detail, _React$Component);

	    function Detail() {
	        _classCallCheck(this, Detail);

	        _get(Object.getPrototypeOf(Detail.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Detail, [{
	        key: 'render',
	        value: function render() {
	            var Component = this.props.onClick ? 'a' : 'div';
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;

	            var other = _objectWithoutProperties(_props, ['defaultClasses']);

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

	    return Detail;
	})(_react2['default'].Component);

	exports['default'] = Detail;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _elements = __webpack_require__(1);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
	    corner: ['left', 'right'],
	    pointing: ['below', 'left', 'right'],
	    ribbon: ['right']
	};

	var Label = (function (_React$Component) {
	    _inherits(Label, _React$Component);

	    function Label() {
	        _classCallCheck(this, Label);

	        _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).apply(this, arguments);
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

	    return Label;
	})(_react2['default'].Component);

	exports['default'] = Label;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Labels = (function (_React$Component) {
	    _inherits(Labels, _React$Component);

	    function Labels() {
	        _classCallCheck(this, Labels);

	        _get(Object.getPrototypeOf(Labels.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Labels, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var circular = _props.circular;
	            var component = _props.component;
	            var color = _props.color;
	            var defaultClasses = _props.defaultClasses;
	            var size = _props.size;
	            var tag = _props.tag;

	            var other = _objectWithoutProperties(_props, ['circular', 'component', 'color', 'defaultClasses', 'size', 'tag']);

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

	    return Labels;
	})(_react2['default'].Component);

	exports['default'] = Labels;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left']
	};

	var List = (function (_React$Component) {
	    _inherits(List, _React$Component);

	    function List() {
	        _classCallCheck(this, List);

	        _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
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

	    return List;
	})(_react2['default'].Component);

	exports['default'] = List;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Loader = (function (_React$Component) {
	    _inherits(Loader, _React$Component);

	    function Loader() {
	        _classCallCheck(this, Loader);

	        _get(Object.getPrototypeOf(Loader.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Loader, [{
	        key: 'render',
	        value: function render() {
	            var other = _objectWithoutProperties(this.props, []);

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

	    return Loader;
	})(_react2['default'].Component);

	exports['default'] = Loader;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Rail = (function (_React$Component) {
	    _inherits(Rail, _React$Component);

	    function Rail() {
	        _classCallCheck(this, Rail);

	        _get(Object.getPrototypeOf(Rail.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Rail, [{
	        key: 'render',
	        value: function render() {
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

	    return Rail;
	})(_react2['default'].Component);

	exports['default'] = Rail;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    move: ['right', 'up', 'down'],
	    rotate: ['left']
	};

	var Reveal = (function (_React$Component) {
	    _inherits(Reveal, _React$Component);

	    function Reveal() {
	        _classCallCheck(this, Reveal);

	        _get(Object.getPrototypeOf(Reveal.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Reveal, [{
	        key: 'render',
	        value: function render() {
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

	    return Reveal;
	})(_react2['default'].Component);

	exports['default'] = Reveal;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    aligned: ['right', 'left', 'center'],
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};

	var Segment = (function (_React$Component) {
	    _inherits(Segment, _React$Component);

	    function Segment() {
	        _classCallCheck(this, Segment);

	        _get(Object.getPrototypeOf(Segment.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Segment, [{
	        key: 'render',
	        value: function render() {
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

	    return Segment;
	})(_react2['default'].Component);

	exports['default'] = Segment;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Segments = (function (_React$Component) {
	    _inherits(Segments, _React$Component);

	    function Segments() {
	        _classCallCheck(this, Segments);

	        _get(Object.getPrototypeOf(Segments.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Segments, [{
	        key: 'render',
	        value: function render() {
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

	    return Segments;
	})(_react2['default'].Component);

	exports['default'] = Segments;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports['default'] = Actions;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports['default'] = Author;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Container = function Container(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;

	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);

	    other.className = (0, _classnames2['default'])(className, { ui: true, container: true });

	    return _react2['default'].createElement(component, other, children);
	};

	Container.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};

	Container.defaultProps = {
	    component: 'div'
	};

	exports['default'] = Container;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left']
	};

	var Content = (function (_React$Component) {
	    _inherits(Content, _React$Component);

	    function Content() {
	        _classCallCheck(this, Content);

	        _get(Object.getPrototypeOf(Content.prototype), 'constructor', this).apply(this, arguments);
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

	    return Content;
	})(_react2['default'].Component);

	exports['default'] = Content;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports['default'] = Date;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Description = (function (_React$Component) {
	    _inherits(Description, _React$Component);

	    function Description() {
	        _classCallCheck(this, Description);

	        _get(Object.getPrototypeOf(Description.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Description, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var component = _props.component;
	            var visible = _props.visible;
	            var hidden = _props.hidden;

	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'component', 'visible', 'hidden']);

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

	    return Description;
	})(_react2['default'].Component);

	exports['default'] = Description;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports['default'] = Meta;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports['default'] = Summary;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	function getClasses(props) {
	    return {
	        ui: props.defaultClasses,

	        extra: props.extra,

	        text: props.defaultClasses
	    };
	}

	var Text = function Text(props) {
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var extra = props.extra;

	    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'defaultClasses', 'extra']);

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

	exports['default'] = Text;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _modulesAccordionAccordion = __webpack_require__(42);

	_defaults(exports, _interopExportWildcard(_modulesAccordionAccordion, _defaults));

	var _modulesAccordionAccordionbody = __webpack_require__(43);

	_defaults(exports, _interopExportWildcard(_modulesAccordionAccordionbody, _defaults));

	var _modulesAccordionAccordiontitle = __webpack_require__(44);

	_defaults(exports, _interopExportWildcard(_modulesAccordionAccordiontitle, _defaults));

	var _modulesAnimateAnimate = __webpack_require__(45);

	_defaults(exports, _interopExportWildcard(_modulesAnimateAnimate, _defaults));

	var _modulesAnimateAnimations = __webpack_require__(51);

	_defaults(exports, _interopExportWildcard(_modulesAnimateAnimations, _defaults));

	var _modulesAnimateRquery = __webpack_require__(54);

	_defaults(exports, _interopExportWildcard(_modulesAnimateRquery, _defaults));

	var _modulesCheckboxCheckbox = __webpack_require__(56);

	_defaults(exports, _interopExportWildcard(_modulesCheckboxCheckbox, _defaults));

	var _modulesCheckboxCheckboxfields = __webpack_require__(57);

	_defaults(exports, _interopExportWildcard(_modulesCheckboxCheckboxfields, _defaults));

	var _modulesDimmerDimmer = __webpack_require__(58);

	_defaults(exports, _interopExportWildcard(_modulesDimmerDimmer, _defaults));

	var _modulesDimmerDimmable = __webpack_require__(59);

	_defaults(exports, _interopExportWildcard(_modulesDimmerDimmable, _defaults));

	var _modulesDropdownDropdown = __webpack_require__(60);

	_defaults(exports, _interopExportWildcard(_modulesDropdownDropdown, _defaults));

	var _modulesDropdownSelect = __webpack_require__(61);

	_defaults(exports, _interopExportWildcard(_modulesDropdownSelect, _defaults));

	var _modulesDropdownOption = __webpack_require__(73);

	_defaults(exports, _interopExportWildcard(_modulesDropdownOption, _defaults));

	var _modulesModalModal = __webpack_require__(74);

	_defaults(exports, _interopExportWildcard(_modulesModalModal, _defaults));

	var _modulesModalModalbody = __webpack_require__(75);

	_defaults(exports, _interopExportWildcard(_modulesModalModalbody, _defaults));

	var _modulesPopupPopup = __webpack_require__(76);

	_defaults(exports, _interopExportWildcard(_modulesPopupPopup, _defaults));

	var _modulesPopupPopupplacer = __webpack_require__(77);

	_defaults(exports, _interopExportWildcard(_modulesPopupPopupplacer, _defaults));

	var _modulesPopupPopupelement = __webpack_require__(78);

	_defaults(exports, _interopExportWildcard(_modulesPopupPopupelement, _defaults));

	var _modulesPopupPortal = __webpack_require__(79);

	_defaults(exports, _interopExportWildcard(_modulesPopupPortal, _defaults));

	var _modulesProgressBar = __webpack_require__(80);

	_defaults(exports, _interopExportWildcard(_modulesProgressBar, _defaults));

	var _modulesProgressProgress = __webpack_require__(81);

	_defaults(exports, _interopExportWildcard(_modulesProgressProgress, _defaults));

	var _modulesRatingRating = __webpack_require__(82);

	_defaults(exports, _interopExportWildcard(_modulesRatingRating, _defaults));

	var _modulesSearchResults = __webpack_require__(83);

	_defaults(exports, _interopExportWildcard(_modulesSearchResults, _defaults));

	var _modulesSearchSearch = __webpack_require__(84);

	_defaults(exports, _interopExportWildcard(_modulesSearchSearch, _defaults));

	var _modulesTabTab = __webpack_require__(85);

	_defaults(exports, _interopExportWildcard(_modulesTabTab, _defaults));

	var _modulesTabTabs = __webpack_require__(87);

	_defaults(exports, _interopExportWildcard(_modulesTabTabs, _defaults));

	var _modulesTabTabtitle = __webpack_require__(88);

	_defaults(exports, _interopExportWildcard(_modulesTabTabtitle, _defaults));

	var _modulesTabTabcontent = __webpack_require__(86);

	_defaults(exports, _interopExportWildcard(_modulesTabTabcontent, _defaults));

/***/ },
/* 42 */
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

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, Accordion);

	        _get(Object.getPrototypeOf(Accordion.prototype), 'constructor', this).call(this, props);

	        this.state = {
	            currentActive: null
	        };
	    }

	    _createClass(Accordion, [{
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
	    }, {
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
	    }]);

	    return Accordion;
	})(_react.Component);

	exports.Accordion = Accordion;

/***/ },
/* 43 */
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

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	// TODO: image and horizontal list examples

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
	        _classCallCheck(this, AccordionBody);

	        _get(Object.getPrototypeOf(AccordionBody.prototype), 'constructor', this).call(this, props);
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

	    return AccordionBody;
	})(_react.Component);

	exports.AccordionBody = AccordionBody;

/***/ },
/* 44 */
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

	var _elements = __webpack_require__(1);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	                {
	                    className: (0, _classnames2['default'])(this.props.className, classes),
	                    onClick: this.props.onClick
	                },
	                _react2['default'].createElement(_elements.Icon, { name: this.props.icon }),
	                this.props.children
	            );
	        }
	    }]);

	    return AccordionTitle;
	})(_react.Component);

	exports.AccordionTitle = AccordionTitle;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports.Animate = Animate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _curves = __webpack_require__(46);

	var _easings = __webpack_require__(47);

	var _easings2 = _interopRequireDefault(_easings);

	var _raf = __webpack_require__(48);

	var _raf2 = _interopRequireDefault(_raf);

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
	            _classCallCheck(this, animation);

	            _get(Object.getPrototypeOf(animation.prototype), 'constructor', this).call(this, props);

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

	        return animation;
	    })(_react2['default'].Component);
	}

/***/ },
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(49)
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

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsTransitionGroup = __webpack_require__(52);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var Animations = (function (_React$Component) {
	    _inherits(Animations, _React$Component);

	    function Animations() {
	        _classCallCheck(this, Animations);

	        _get(Object.getPrototypeOf(Animations.prototype), 'constructor', this).apply(this, arguments);
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
	            var _props = this.props;
	            var enter = _props.enter;
	            var leave = _props.leave;

	            var other = _objectWithoutProperties(_props, ['enter', 'leave']);

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

	    return Animations;
	})(_react2['default'].Component);

	exports.Animations = Animations;

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactDom = __webpack_require__(55);

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
/* 55 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, Checkbox);

	        _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).call(this, props);

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
	            var _props2 = this.props;
	            var component = _props2.component;
	            var defaultClasses = _props2.defaultClasses;
	            var name = _props2.name;

	            var other = _objectWithoutProperties(_props2, ['component', 'defaultClasses', 'name']);

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
	})(_react.Component);

	exports.Checkbox = Checkbox;

/***/ },
/* 57 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, CheckboxFields);

	        _get(Object.getPrototypeOf(CheckboxFields.prototype), 'constructor', this).call(this, props);

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
	            var _props = this.props;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var name = _props.name;

	            var other = _objectWithoutProperties(_props, ['component', 'defaultClasses', 'name']);

	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

	            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
	        }

	        // clone a chid and update the props
	    }, {
	        key: 'cloneChild',
	        value: function cloneChild(index, child) {
	            var boundClick = this.onClick.bind(this, index);

	            var _props2 = this.props;
	            var children = _props2.children;
	            var component = _props2.component;
	            var defaultClasses = _props2.defaultClasses;
	            var onClick = _props2.onClick;
	            var type = _props2.type;

	            var other = _objectWithoutProperties(_props2, ['children', 'component', 'defaultClasses', 'onClick', 'type']);

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

	    return CheckboxFields;
	})(_react.Component);

	exports.CheckboxFields = CheckboxFields;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _elements = __webpack_require__(1);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Dimmer = (function (_Component) {
	    _inherits(Dimmer, _Component);

	    _createClass(Dimmer, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            basic: _react2['default'].PropTypes.bool,
	            blurring: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            page: _react2['default'].PropTypes.bool
	        },

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
	        value: {
	            defaultClasses: true,
	            basic: true,
	            page: false
	        },
	        enumerable: true
	    }]);

	    function Dimmer(props) {
	        _classCallCheck(this, Dimmer);

	        _get(Object.getPrototypeOf(Dimmer.prototype), 'constructor', this).call(this, props);

	        this.enter = {
	            ease: 'swing',
	            from: {
	                opacity: 0
	            },
	            to: {
	                opacity: 1
	            }
	        };

	        this.leave = {
	            ease: 'swing',
	            from: {
	                opacity: 1
	            },
	            to: {
	                opacity: 0
	            }
	        };
	    }

	    _createClass(Dimmer, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isDimmerChild: true
	            };
	        }

	        // IE 10+
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.page) {
	                document.body.classList.add('dimmable');
	            }
	        }

	        // IE 10+
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.page) {
	                document.body.classList.remove('dimmable');
	            }
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            return (0, _utilities.getChild)(this.props.children, _elements.Content);
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {
	            return (0, _utilities.getChild)(this.props.children, _elements.Content, false);
	        }
	    }, {
	        key: 'renderDimmer',
	        value: function renderDimmer() {
	            var _props = this.props;
	            var component = _props.component;
	            var disabled = _props.disabled;
	            var inverted = _props.inverted;

	            var other = _objectWithoutProperties(_props, ['component', 'disabled', 'inverted']);

	            var dimmerChildren = [];

	            if (this.props.active) {
	                dimmerChildren.push(_react2['default'].createElement(
	                    _modules.Dimmable,
	                    {
	                        enter: this.enter,
	                        key: 'animation',
	                        leave: this.leave,
	                        page: this.props.page
	                    },
	                    this.renderContent()
	                ));
	            }

	            Array.prototype.push.apply(dimmerChildren, this.renderChildren());

	            other.className = (0, _classnames2['default'])(this.getClasses());
	            other.component = _elements.Segment;

	            return _react2['default'].createElement(_modules.Animations, other, dimmerChildren);
	        }
	    }, {
	        key: 'renderLoader',
	        value: function renderLoader() {
	            var _props2 = this.props;
	            var disabled = _props2.disabled;
	            var inverted = _props2.inverted;

	            var other = _objectWithoutProperties(_props2, ['disabled', 'inverted']);

	            other.className = (0, _classnames2['default'])(this.props.className, this.props.inverted ? 'inverted' : '', this.getDimmerClasses());

	            return _react2['default'].createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if ((0, _utilities.hasChild)(this.props.children, _elements.Loader)) {
	                return this.renderLoader();
	            } else {
	                return this.renderDimmer();
	            }
	        }
	    }, {
	        key: 'getAnimation',
	        value: function getAnimation() {
	            return {
	                state: this.props.active,
	                enterState: {
	                    name: 'fadeIn',
	                    ease: 'cubic-out',
	                    duration: 250
	                },
	                exitState: {
	                    name: 'fadeOut',
	                    ease: 'cubic-out',
	                    duration: 300
	                }
	            };
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                dimmable: this.props.defaultClasses,
	                dimmed: this.props.active,

	                // positioning

	                // types
	                inverted: this.props.inverted,
	                blurring: this.props.blurring

	                // component

	                // variations
	            };

	            return classes;
	        }
	    }, {
	        key: 'getDimmerClasses',
	        value: function getDimmerClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,
	                active: this.props.defaultClasses,
	                dimmer: this.props.defaultClasses
	            };

	            return classes;
	        }
	    }]);

	    return Dimmer;
	})(_react.Component);

	exports.Dimmer = Dimmer;

/***/ },
/* 59 */
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

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Dimmable = (function (_Component) {
	    _inherits(Dimmable, _Component);

	    _createClass(Dimmable, null, [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            page: _react2['default'].PropTypes.bool,
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

	    function Dimmable(props) {
	        _classCallCheck(this, _Dimmable);

	        _get(Object.getPrototypeOf(_Dimmable.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Dimmable, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.page) {
	                document.body.classList.add('dimmed');
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.page) {
	                document.body.classList.remove('dimmed');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(this.props.component, {
	                className: (0, _classnames2['default'])(this.getClasses()),
	                style: this.props.style
	            }, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                ui: this.props.defaultClasses,
	                active: this.props.defaultClasses,
	                dimmer: this.props.defaultClasses,
	                page: this.props.page
	            };
	        }
	    }]);

	    var _Dimmable = Dimmable;
	    Dimmable = (0, _modules.Animate)(Dimmable) || Dimmable;
	    return Dimmable;
	})(_react.Component);

	exports.Dimmable = Dimmable;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Dropdown = (function (_React$Component) {
	    _inherits(Dropdown, _React$Component);

	    _createClass(Dropdown, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            error: _react2['default'].PropTypes.bool,
	            fluid: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            labeled: _react2['default'].PropTypes.bool,
	            multiple: _react2['default'].PropTypes.bool,
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
	        _classCallCheck(this, Dropdown);

	        _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).call(this, props);
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
	            var _props = this.props;
	            var active = _props.active;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var inverted = _props.inverted;
	            var multiple = _props.multiple;

	            var other = _objectWithoutProperties(_props, ['active', 'component', 'defaultClasses', 'disabled', 'inverted', 'multiple']);

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
	            return {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning

	                // types
	                selection: this.props.selection,
	                fluid: this.props.fluid,
	                labeled: this.props.labeled,
	                search: this.props.search,
	                multiple: this.props.multiple,

	                // state
	                active: this.props.active,
	                visible: this.props.visible,
	                error: this.props.error,
	                disabled: this.props.disabled,

	                // component
	                dropdown: this.props.defaultClasses

	                // variations
	            };
	        }
	    }]);

	    return Dropdown;
	})(_react2['default'].Component);

	exports.Dropdown = Dropdown;

/***/ },
/* 61 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(55);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _elements = __webpack_require__(1);

	var _views = __webpack_require__(62);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactOutsideclickhandler = __webpack_require__(72);

	var _reactOutsideclickhandler2 = _interopRequireDefault(_reactOutsideclickhandler);

	/**
	 * A dropdown component intended to behave exactly as the
	 * HTML select component.
	 */

	var Select = (function (_React$Component) {
	    _inherits(Select, _React$Component);

	    _createClass(Select, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            enterAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            fluid: _react2['default'].PropTypes.bool,
	            glyphWidth: _react2['default'].PropTypes.number,
	            ignoreCase: _react2['default'].PropTypes.bool,
	            leaveAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
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
	            noResults: 'No results found...'
	        },
	        enumerable: true
	    }]);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).call(this, props);

	        // animations should just move these to props
	        this.animation = {
	            enter: this.props.enterAnimation || {
	                duration: 150,
	                easing: 'out-circ',
	                from: {
	                    opacity: 0,
	                    transform: 'scaleY(0)',
	                    transformOrigin: 'top center',
	                    WebkitTransform: 'scaleY(0)',
	                    WebkitTransformOrigin: 'top center'
	                },
	                to: {
	                    opacity: 1,
	                    transform: 'scaleY(1)',
	                    transformOrigin: 'top center',
	                    WebkitTransform: 'scaleY(1)',
	                    WebkitTransformOrigin: 'top center'
	                }
	            }
	        };

	        this.animation.leave = this.props.leaveAnimation || {
	            duration: 150,
	            easing: 'out-cubic',
	            from: this.animation.enter.to,
	            to: this.animation.enter.from
	        };

	        // we don't want this modifying state
	        this.validOptions = {};

	        this.state = {
	            active: false,
	            error: false,
	            selected: props.multiple ? [] : null,
	            visible: false
	        };
	    }

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
	    }, {
	        key: 'onDocumentClick',
	        value: function onDocumentClick() {
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
	            } else if (this.refs.search.value && this.state.active && !this.state.error && this.state.selected.length == 0) {
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

	            this.refs.search.value = '';

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

	            this.refs.search.value = '';

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
	                    return _react2['default'].createElement(
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
	                _reactOutsideclickhandler2['default'],
	                {
	                    onOutsideClick: this.onDocumentClick.bind(this)
	                },
	                _react2['default'].createElement(
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
	                        _modules.Animations,
	                        {
	                            active: this.state.active,
	                            animate: this.state.active,
	                            component: _views.Menu,
	                            end: this.animation.leave,
	                            onComplete: this.onAnimationComplete.bind(this),
	                            start: this.animation.enter
	                        },
	                        children
	                    )
	                )
	            );
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
	            var target = this.props.ignoreCase ? this.refs.search.value.toLowerCase() : this.refs.search.value;

	            for (var _name in this.validOptions) {
	                var text = this.props.ignoreCase ? _name.toLowerCase() : _name;

	                if (text == target) {
	                    match = _name;
	                    break;
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

	    return Select;
	})(_react2['default'].Component);

	exports.Select = Select;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _viewsCardCard = __webpack_require__(63);

	_defaults(exports, _interopExportWildcard(_viewsCardCard, _defaults));

	var _viewsCardCards = __webpack_require__(64);

	_defaults(exports, _interopExportWildcard(_viewsCardCards, _defaults));

	var _viewsMenuMenu = __webpack_require__(65);

	_defaults(exports, _interopExportWildcard(_viewsMenuMenu, _defaults));

	var _viewsCommentComments = __webpack_require__(66);

	_defaults(exports, _interopExportWildcard(_viewsCommentComments, _defaults));

	var _viewsCommentComment = __webpack_require__(67);

	_defaults(exports, _interopExportWildcard(_viewsCommentComment, _defaults));

	var _viewsFeedFeed = __webpack_require__(68);

	_defaults(exports, _interopExportWildcard(_viewsFeedFeed, _defaults));

	var _viewsFeedEvent = __webpack_require__(69);

	_defaults(exports, _interopExportWildcard(_viewsFeedEvent, _defaults));

	var _viewsItemItem = __webpack_require__(70);

	_defaults(exports, _interopExportWildcard(_viewsItemItem, _defaults));

	var _viewsItemItems = __webpack_require__(71);

	_defaults(exports, _interopExportWildcard(_viewsItemItems, _defaults));

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, Card);

	        _get(Object.getPrototypeOf(Card.prototype), 'constructor', this).call(this, props);
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
	            var _props = this.props;
	            var centered = _props.centered;
	            var col = _props.col;
	            var color = _props.color;
	            var doubling = _props.doubling;
	            var defaultClasses = _props.defaultClasses;
	            var fluid = _props.fluid;

	            var other = _objectWithoutProperties(_props, ['centered', 'col', 'color', 'doubling', 'defaultClasses', 'fluid']);

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

	    return Card;
	})(_react2['default'].Component);

	exports.Card = Card;

/***/ },
/* 64 */
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

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, Cards);

	        _get(Object.getPrototypeOf(Cards.prototype), 'constructor', this).call(this, props);
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

	    return Cards;
	})(_react.Component);

	exports.Cards = Cards;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    attached: ['top', 'bottom']
	};

	var Menu = (function (_React$Component) {
	    _inherits(Menu, _React$Component);

	    function Menu() {
	        _classCallCheck(this, _Menu);

	        _get(Object.getPrototypeOf(_Menu.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Menu, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isMenuChild: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var active = _props.active;
	            var start = _props.start;
	            var end = _props.end;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var even = _props.even;

	            var other = _objectWithoutProperties(_props, ['active', 'start', 'end', 'component', 'defaultClasses', 'even']);

	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	            other.style = this.props.style;

	            if (this.props.component == Menu) {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }

	            return _react2['default'].createElement(component, other, this.props.children);
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
	                pointing: this.props.pointing,
	                secondary: this.props.secondary,
	                tabular: this.props.tabular,
	                vertical: this.props.vertical,
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            attached: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
	            borderless: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.node]),
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            end: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            even: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            pointing: _react2['default'].PropTypes.bool,
	            right: _react2['default'].PropTypes.bool,
	            secondary: _react2['default'].PropTypes.bool,
	            start: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            style: _react2['default'].PropTypes.object,
	            tabular: _react2['default'].PropTypes.bool,
	            text: _react2['default'].PropTypes.bool,
	            vertical: _react2['default'].PropTypes.bool
	        },
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
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    var _Menu = Menu;
	    Menu = (0, _modules.Animate)(Menu) || Menu;
	    return Menu;
	})(_react2['default'].Component);

	exports.Menu = Menu;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

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
	    var children = props.children;
	    var className = props.className;
	    var collapsed = props.collapsed;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var minimal = props.minimal;
	    var threaded = props.threaded;

	    var other = _objectWithoutProperties(props, ['children', 'className', 'collapsed', 'component', 'defaultClasses', 'minimal', 'threaded']);

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

	exports.Comments = comments;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports.Comment = Comment;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	function getClasses(props) {
	    var classes = {
	        ui: props.defaultClasses,

	        feed: props.defaultClasses
	    };

	    classes[props.size] = !!props.size;

	    return classes;
	}

	var Feed = function Feed(props) {
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var size = props.size;

	    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'defaultClasses', 'size']);

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

	exports.Feed = Feed;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports.Event = Event;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Item = (function (_React$Component) {
	    _inherits(Item, _React$Component);

	    function Item() {
	        _classCallCheck(this, Item);

	        _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Item, [{
	        key: 'render',
	        value: function render() {
	            // if it's attached or animated use a div instead of a button
	            var Component = (this.props.link || this.props.onClick) && !this.context.isMenuChild ? 'a' : 'div';

	            var _props = this.props;
	            var active = _props.active;
	            var component = _props.component;
	            var color = _props.color;
	            var link = _props.link;
	            var selected = _props.selected;
	            var defaultClasses = _props.defaultClasses;
	            var name = _props.name;

	            var other = _objectWithoutProperties(_props, ['active', 'component', 'color', 'link', 'selected', 'defaultClasses', 'name']);

	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

	            return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default

	                // positioning

	                // types
	                active: this.props.active,
	                selected: this.props.active && this.context.isMenuChild,

	                // content

	                // variations

	                // component
	                item: this.props.defaultClasses
	            };

	            classes[this.props.color] = !!this.props.color;

	            return classes;
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.node, _react2['default'].PropTypes.object]),
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string,
	            onClick: _react2['default'].PropTypes.func,
	            selected: _react2['default'].PropTypes.bool
	        },

	        // anytime we are the child of a menu, we want to use a div
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isMenuChild: _react2['default'].PropTypes.bool
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
	})(_react2['default'].Component);

	exports.Item = Item;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Items = (function (_React$Component) {
	    _inherits(Items, _React$Component);

	    function Items() {
	        _classCallCheck(this, Items);

	        _get(Object.getPrototypeOf(Items.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Items, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var divided = _props.divided;

	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'divided']);

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

	    return Items;
	})(_react2['default'].Component);

	exports.Items = Items;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015 Eric Suh
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	"use strict";
	var React = __webpack_require__(3);

	var OutsideClickHandler = React.createClass({
	  propTypes: {
	    onOutsideClick: React.PropTypes.func
	  },
	  componentDidMount: function () {
	    document.addEventListener('click', this.handleDocumentClick, false);
	  },
	  componentWillUnmount: function () {
	    document.removeEventListener('click', this.handleDocumentClick, false);
	  },
	  render: function () {
	    return React.DOM.div(
	      {onClick: this.handleMyClick},
	      this.props.children
	    );
	  },
	  handleDocumentClick: function (event) {
	    if (this.props.onOutsideClick !== null) {
	      return this.props.onOutsideClick(event);
	    }
	  },
	  handleMyClick: function (event) {
	    event.stopPropagation();
	    event.nativeEvent.stopImmediatePropagation();
	  }
	});

	module.exports = OutsideClickHandler;


/***/ },
/* 73 */
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

	var _elements = __webpack_require__(1);

	var Option = (function (_React$Component) {
	    _inherits(Option, _React$Component);

	    function Option() {
	        _classCallCheck(this, Option);

	        _get(Object.getPrototypeOf(Option.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Option, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                _elements.Item,
	                this.props,
	                this.props.children
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            value: _react2['default'].PropTypes.string.isRequired
	        },
	        enumerable: true
	    }]);

	    return Option;
	})(_react2['default'].Component);

	exports.Option = Option;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(41);

	var _reactOutsideclickhandler = __webpack_require__(72);

	var _reactOutsideclickhandler2 = _interopRequireDefault(_reactOutsideclickhandler);

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
	        _classCallCheck(this, Modal);

	        _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, props);

	        this.state = {
	            active: false,
	            visible: false
	        };
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
	        key: 'onModalClose',
	        value: function onModalClose() {
	            if (this.state.active) {
	                this.setState({
	                    active: false
	                });
	            }
	        }
	    }, {
	        key: 'renderModalBody',
	        value: function renderModalBody() {
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

	            var props = Object.assign(other, {
	                animate: this.state.active,
	                active: this.state.visible,
	                start: this.props.enterAnimation,
	                end: this.props.leaveAnimation,
	                onComplete: this.onAnimationComplete.bind(this)
	            });

	            var modal = _react2['default'].createElement(_modules.ModalBody, props, this.props.children);

	            if (this.props.outsideClickClose) {
	                return _react2['default'].createElement(
	                    _reactOutsideclickhandler2['default'],
	                    {
	                        onOutsideClick: this.onModalClose.bind(this)
	                    },
	                    modal
	                );
	            } else {
	                return modal;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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

	            other.active = this.state.active;

	            return _react2['default'].createElement(_modules.Dimmer, other, this.renderModalBody());
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
	})(_react2['default'].Component);

	exports.Modal = Modal;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	    ModalBody = (0, _modules.Animate)(ModalBody) || ModalBody;
	    return ModalBody;
	})(_react2['default'].Component);

	exports.ModalBody = ModalBody;

/***/ },
/* 76 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(41);

	var Popup = (function (_React$Component) {
	    _inherits(Popup, _React$Component);

	    _createClass(Popup, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            endAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            position: _react2['default'].PropTypes.string,
	            startAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            })
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            startAnimation: {
	                duration: 200,
	                easing: 'ease in',
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
	            endAnimation: {
	                duration: 200,
	                easing: 'ease in',
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
	            position: 'top left'
	        },
	        enumerable: true
	    }]);

	    function Popup(props) {
	        _classCallCheck(this, Popup);

	        _get(Object.getPrototypeOf(Popup.prototype), 'constructor', this).call(this, props);

	        this.position = this.start = this.props.position;
	        this.lastPosition = false;
	        this.ready = false;
	    }

	    _createClass(Popup, [{
	        key: 'onPositioned',
	        value: function onPositioned(success, position, style, classes, nextPosition) {
	            // if the position is good OR if we have tried every position unsuccessfully
	            if (success || this.position == this.start && this.lastPosition) {
	                this.ready = true;
	                this.position = position;
	                this.style = style;
	                this.classes = classes;
	                this.forceUpdate();
	            } else {
	                this.ready = false;
	                this.lastPosition = position;
	                this.position = nextPosition;
	                this.forceUpdate();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var active = _props.active;
	            var children = _props.children;
	            var position = _props.position;
	            var startAnimation = _props.startAnimation;
	            var endAnimation = _props.endAnimation;

	            var other = _objectWithoutProperties(_props, ['active', 'children', 'position', 'startAnimation', 'endAnimation']);

	            var popup = undefined;

	            // popup is not placed, but is active
	            if (!this.ready && this.props.active) {
	                popup = _react2['default'].createElement(
	                    _modules.PopupPlacer,
	                    {
	                        active: true,
	                        autoPosition: true,
	                        key: this.position,
	                        lastPosition: this.lastPosition,
	                        onPositioned: this.onPositioned.bind(this),
	                        position: this.position
	                    },
	                    this.props.children
	                );
	                // popup is inactive
	            } else if (!this.props.active) {
	                    popup = _react2['default'].createElement('noscript', null);
	                    // popup is active and read (display calculated position)
	                } else {
	                        var child = this.props.active ? this.props.children : null;
	                        popup = _react2['default'].createElement(
	                            _modules.PopupElement,
	                            _extends({}, this.props, {
	                                classes: this.classes,
	                                enter: this.props.startAnimation,
	                                key: 'popupAnimation',
	                                leave: this.props.endAnimation,
	                                pStyle: this.style,
	                                position: this.position
	                            }),
	                            child
	                        );
	                    }

	            return _react2['default'].createElement(
	                _modules.Animations,
	                null,
	                popup
	            );
	        }
	    }]);

	    return Popup;
	})(_react2['default'].Component);

	exports.Popup = Popup;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    position: ['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center']
	};

	var PopupPlacer = (function (_React$Component) {
	    _inherits(PopupPlacer, _React$Component);

	    _createClass(PopupPlacer, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            distanceAway: _react2['default'].PropTypes.number,
	            jitter: _react2['default'].PropTypes.number,
	            offset: _react2['default'].PropTypes.number,
	            onPositioned: _react2['default'].PropTypes.func,
	            position: _react2['default'].PropTypes.oneOf(['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center']),
	            target: _react2['default'].PropTypes.array
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            active: false,
	            component: 'div',
	            defaultClasses: true,
	            distanceAway: 0,
	            jitter: 2,
	            offset: 0,
	            position: 'top left'
	        },
	        enumerable: true
	    }]);

	    function PopupPlacer(props) {
	        _classCallCheck(this, PopupPlacer);

	        _get(Object.getPrototypeOf(PopupPlacer.prototype), 'constructor', this).call(this, props);

	        this.initialRender = true;
	    }

	    _createClass(PopupPlacer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // calculate various positions on the screen
	            this.setCalculations();

	            // if we don't force an update, the position won't change
	            this.forceUpdate();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            // no need to recalculate on the initial render
	            if (!this.initialRender) {
	                this.setCalculations();
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(props) {
	            // only update of it's active AND the position has changed
	            if (props.active === true && props.position !== this.props.position) {
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(props) {

	            // popup is inactive, make the style object empty
	            if (props.active === false) {
	                this.style = {};
	                // active popup, generate the styles
	            } else {
	                    this.style = this.generateStyle();
	                }
	        }

	        // verify if the position is valid (doesn't hit a boundary)
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var _this = this;

	            var distance = this.getBoundaryDistance();
	            var intersects = false;

	            // test if the boundary intersects with the popup, allowing for this.props.jitter
	            intersects = Object.keys(distance).some(function (dist) {
	                if (distance[dist] < -_this.props.jitter) {
	                    return true;
	                }
	            });

	            !intersects ? this.props.onPositioned(true, this.props.position, this.style, this.getClasses()) : this.props.onPositioned(false, this.props.position, this.style, this.getClasses(), this.getNextPosition());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var offset = _props.offset;

	            var other = _objectWithoutProperties(_props, ['component', 'defaultClasses', 'offset']);

	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	            other.style = this.style || {};

	            // as soon as we render once, we start doing calculations at every position change
	            this.initialRender = false;

	            return _react2['default'].createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getBoundaryDistance',
	        value: function getBoundaryDistance() {
	            var component = (0, _modules.$)(this);
	            var offset = component.offset();
	            var boundary = this.calculations.boundary;

	            if (offset) {
	                return {
	                    top: offset.top - boundary.top,
	                    left: offset.left - boundary.left,
	                    right: boundary.right - (offset.left + component.width()),
	                    bottom: boundary.bottom - (offset.top + component.height())
	                };
	            }
	        }
	    }, {
	        key: 'generateStyle',
	        value: function generateStyle() {
	            var positioning = {};
	            var position = this.props.position;
	            var parent = this.calculations.parent;
	            var target = this.calculations.target;
	            var popup = this.calculations.popup;
	            var distanceAway = this.props.distanceAway;
	            var offset = this.props.offset;

	            switch (position) {
	                case 'top left':
	                    positioning = {
	                        top: 'auto',
	                        bottom: parent.height - target.top + distanceAway,
	                        left: target.left + offset,
	                        right: 'auto'
	                    };
	                    break;
	                case 'top center':
	                    positioning = {
	                        bottom: parent.height - target.top + distanceAway,
	                        left: target.left + target.width / 2 - popup.width / 2 + offset,
	                        top: 'auto',
	                        right: 'auto'
	                    };
	                    break;
	                case 'top right':
	                    positioning = {
	                        bottom: parent.height - target.top + distanceAway,
	                        right: parent.width - target.left - target.width - offset,
	                        top: 'auto',
	                        left: 'auto'
	                    };
	                    break;
	                case 'left center':
	                    positioning = {
	                        top: target.top + target.height / 2 - popup.height / 2 + offset,
	                        right: parent.width - target.left + distanceAway,
	                        left: 'auto',
	                        bottom: 'auto'
	                    };
	                    break;
	                case 'right center':
	                    positioning = {
	                        top: target.top + target.height / 2 - popup.height / 2 + offset,
	                        left: target.left + target.width + distanceAway,
	                        bottom: 'auto',
	                        right: 'auto'
	                    };
	                    break;
	                case 'bottom left':
	                    positioning = {
	                        top: target.top + target.height + distanceAway,
	                        left: target.left + offset,
	                        bottom: 'auto',
	                        right: 'auto'
	                    };
	                    break;
	                case 'bottom center':
	                    positioning = {
	                        top: target.top + target.height + distanceAway,
	                        left: target.left + target.width / 2 - popup.width / 2 + offset,
	                        bottom: 'auto',
	                        right: 'auto'
	                    };
	                    break;
	                case 'bottom right':
	                    positioning = {
	                        top: target.top + target.height + distanceAway,
	                        right: parent.width - target.left - target.width - offset,
	                        left: 'auto',
	                        bottom: 'auto'
	                    };
	                    break;
	            }

	            positioning.display = 'block';
	            return positioning;
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,

	                // component
	                popup: this.props.defaultClasses,

	                // visbility
	                visible: true
	            };

	            var position = this.props.position.split(' ');

	            position.forEach(function (pos) {
	                classes[pos] = true;
	            });

	            return classes;
	        }

	        // the popup didn't fit so we get the next position
	        // this can cycle forever, it's the responsibility of the parent
	        // to know when to stop
	    }, {
	        key: 'getNextPosition',
	        value: function getNextPosition() {
	            var last = validProps.position.length - 1;
	            var current = validProps.position.indexOf(this.props.position);

	            if (current == last) {
	                return validProps.position[0];
	            } else {
	                return validProps.position[current + 1];
	            }
	        }
	    }, {
	        key: 'setCalculations',
	        value: function setCalculations() {
	            var component = (0, _modules.$)(this);
	            var parent = (0, _modules.$)(component.parent()).parent();
	            var position = (0, _modules.$)(parent).offset();
	            var win = (0, _modules.$)(window);
	            var offsetParent = (0, _modules.$)(component.offsetParent());

	            var calculations = {
	                target: {
	                    element: parent,
	                    width: parent.width(),
	                    height: parent.height(),
	                    top: position.top,
	                    left: position.left
	                },
	                popup: {
	                    width: component.width(),
	                    height: component.height()
	                },
	                parent: {
	                    width: offsetParent.width(),
	                    height: offsetParent.height()
	                },
	                margins: {
	                    top: parent.css('margin-top'),
	                    left: parent.css('margin-left')
	                }
	            };

	            calculations.screen = {
	                scroll: {
	                    top: win.scrollTop(),
	                    left: win.scrollLeft()
	                },
	                width: win.width(),
	                height: win.height()
	            };

	            calculations.boundary = {
	                top: calculations.screen.scroll.top,
	                bottom: calculations.screen.scroll.top + calculations.screen.height,
	                left: calculations.screen.scroll.left,
	                right: calculations.screen.scroll.left + calculations.screen.width
	            };

	            this.calculations = calculations;
	        }
	    }]);

	    return PopupPlacer;
	})(_react2['default'].Component);

	exports.PopupPlacer = PopupPlacer;

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

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var PopupElement = (function (_React$Component) {
	    _inherits(PopupElement, _React$Component);

	    function PopupElement() {
	        _classCallCheck(this, _PopupElement);

	        _get(Object.getPrototypeOf(_PopupElement.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(PopupElement, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var classes = _props.classes;
	            var style = _props.style;
	            var pStyle = _props.pStyle;

	            var other = _objectWithoutProperties(_props, ['className', 'classes', 'style', 'pStyle']);

	            other.style = Object.assign({}, style, pStyle);

	            other.className = (0, _classnames2['default'])(className, classes);

	            return _react2['default'].createElement(this.props.component, other, this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            classes: _react2['default'].PropTypes.object,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            pStyle: _react2['default'].PropTypes.object,
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div'
	        },
	        enumerable: true
	    }]);

	    var _PopupElement = PopupElement;
	    PopupElement = (0, _modules.Animate)(PopupElement) || PopupElement;
	    return PopupElement;
	})(_react2['default'].Component);

	exports.PopupElement = PopupElement;

/***/ },
/* 79 */
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

	var _reactDom = __webpack_require__(55);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var Portal = (function (_React$Component) {
	    _inherits(Portal, _React$Component);

	    function Portal() {
	        _classCallCheck(this, Portal);

	        _get(Object.getPrototypeOf(Portal.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Portal, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.bodyChild = document.createElement('div');
	            document.body.appendChild(this.bodyChild);
	            this.mounted = false;
	            this.renderBody();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.renderBody();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _reactDom2['default'].unmountComponentAtNode(this.bodyChild);
	            document.body.removeChild(this.bodyChild);
	        }
	    }, {
	        key: 'renderBody',
	        value: function renderBody() {
	            _reactDom2['default'].render(this.props.children, this.bodyChild);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('div', null);
	        }
	    }, {
	        key: 'getRootNode',
	        value: function getRootNode() {}
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node
	        },
	        enumerable: true
	    }]);

	    return Portal;
	})(_react2['default'].Component);

	exports.Portal = Portal;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Bar = (function (_React$Component) {
	    _inherits(Bar, _React$Component);

	    function Bar() {
	        _classCallCheck(this, Bar);

	        _get(Object.getPrototypeOf(Bar.prototype), 'constructor', this).apply(this, arguments);
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
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var progress = _props.progress;
	            var showPercentage = _props.showPercentage;
	            var component = _props.component;

	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'progress', 'showPercentage', 'component']);

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

	    return Bar;
	})(_react2['default'].Component);

	exports.Bar = Bar;

/***/ },
/* 81 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _modules = __webpack_require__(41);

	var _utilities = __webpack_require__(4);

	var validProps = {
	    attached: ['top', 'bottom']
	};

	var Progress = (function (_React$Component) {
	    _inherits(Progress, _React$Component);

	    function Progress() {
	        _classCallCheck(this, Progress);

	        _get(Object.getPrototypeOf(Progress.prototype), 'constructor', this).apply(this, arguments);
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

	            other.progress = this.getProgress(other.progress);

	            return _react2['default'].createElement(_modules.Bar, _extends({
	                key: 'progressBar'
	            }, other));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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

	    return Progress;
	})(_react2['default'].Component);

	exports.Progress = Progress;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, Rating);

	        _get(Object.getPrototypeOf(Rating.prototype), 'constructor', this).call(this, props);

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
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var heart = _props.heart;
	            var max = _props.max;
	            var size = _props.size;
	            var star = _props.star;

	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'heart', 'max', 'size', 'star']);

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

	    return Rating;
	})(_react2['default'].Component);

	exports.Rating = Rating;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(41);

	var _elements = __webpack_require__(1);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	    Results = (0, _modules.Animate)(Results) || Results;
	    return Results;
	})(_react2['default'].Component);

	exports.Results = Results;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(1);

	var _results = __webpack_require__(83);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	            enterAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            icon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            leaveAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
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
	                duration: 200,
	                easing: 'out-expo',
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
	                duration: 200,
	                easing: 'out-expo',
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
	            onSearchClick: function noop() {},
	            placeholder: 'Search...'
	        },
	        enumerable: true
	    }]);

	    function Search(props) {
	        _classCallCheck(this, Search);

	        _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);

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
	                animate: this.state.focus && this.searchInput.value !== '',
	                emptyHeader: this.props.emptyHeader,
	                emptyMessage: this.props.emptyMessage,
	                key: 'searchResults',
	                onSearchClick: this.onSearchClick.bind(this),
	                results: this.results || this.props.results,
	                search: this.searchInput ? this.searchInput.value : '',
	                start: this.props.enterAnimation,
	                end: this.props.leaveAnimation
	            };

	            return _react2['default'].createElement(_results.Results, props);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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

	    return Search;
	})(_react2['default'].Component);

	exports.Search = Search;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _tabcontent = __webpack_require__(86);

	var Tab = (function (_React$Component) {
	    _inherits(Tab, _React$Component);

	    function Tab() {
	        _classCallCheck(this, Tab);

	        _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Tab, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var header = _props.header;

	            var other = _objectWithoutProperties(_props, ['children', 'header']);

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

	    return Tab;
	})(_react2['default'].Component);

	exports.Tab = Tab;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var TabContent = (function (_React$Component) {
	    _inherits(TabContent, _React$Component);

	    function TabContent() {
	        _classCallCheck(this, TabContent);

	        _get(Object.getPrototypeOf(TabContent.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(TabContent, [{
	        key: 'render',
	        value: function render() {
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

	    return TabContent;
	})(_react2['default'].Component);

	exports.TabContent = TabContent;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _tab = __webpack_require__(85);

	var _tabtitle = __webpack_require__(88);

	var _views = __webpack_require__(62);

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
	        _classCallCheck(this, Tabs);

	        _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this, props);

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
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var position = _props.position;
	            var type = _props.type;

	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'position', 'type']);

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

	    return Tabs;
	})(_react2['default'].Component);

	exports.Tabs = Tabs;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var TabTitle = (function (_React$Component) {
	    _inherits(TabTitle, _React$Component);

	    function TabTitle() {
	        _classCallCheck(this, TabTitle);

	        _get(Object.getPrototypeOf(TabTitle.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(TabTitle, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var position = _props.position;
	            var title = _props.title;
	            var type = _props.type;

	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'position', 'title', 'type']);

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

	    return TabTitle;
	})(_react2['default'].Component);

	exports.TabTitle = TabTitle;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _collectionsGridComputer = __webpack_require__(90);

	_defaults(exports, _interopExportWildcard(_collectionsGridComputer, _defaults));

	var _collectionsGridTablet = __webpack_require__(92);

	_defaults(exports, _interopExportWildcard(_collectionsGridTablet, _defaults));

	var _collectionsGridMobile = __webpack_require__(93);

	_defaults(exports, _interopExportWildcard(_collectionsGridMobile, _defaults));

	var _collectionsGridDevice = __webpack_require__(91);

	_defaults(exports, _interopExportWildcard(_collectionsGridDevice, _defaults));

	var _collectionsGridColumn = __webpack_require__(94);

	_defaults(exports, _interopExportWildcard(_collectionsGridColumn, _defaults));

	var _collectionsGridRow = __webpack_require__(95);

	_defaults(exports, _interopExportWildcard(_collectionsGridRow, _defaults));

	var _collectionsGridGrid = __webpack_require__(96);

	_defaults(exports, _interopExportWildcard(_collectionsGridGrid, _defaults));

	var _collectionsMessageMessage = __webpack_require__(97);

	_defaults(exports, _interopExportWildcard(_collectionsMessageMessage, _defaults));

	var _collectionsTableTable = __webpack_require__(98);

	_defaults(exports, _interopExportWildcard(_collectionsTableTable, _defaults));

	var _collectionsTableTr = __webpack_require__(99);

	_defaults(exports, _interopExportWildcard(_collectionsTableTr, _defaults));

	var _collectionsTableTd = __webpack_require__(100);

	_defaults(exports, _interopExportWildcard(_collectionsTableTd, _defaults));

	var _collectionsFormForm = __webpack_require__(101);

	_defaults(exports, _interopExportWildcard(_collectionsFormForm, _defaults));

	var _collectionsFormFields = __webpack_require__(102);

	_defaults(exports, _interopExportWildcard(_collectionsFormFields, _defaults));

	var _collectionsFormField = __webpack_require__(103);

	_defaults(exports, _interopExportWildcard(_collectionsFormField, _defaults));

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _device = __webpack_require__(91);

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
/* 91 */
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

	var _utilities = __webpack_require__(4);

	var validProps = {
	    reversed: ['vertically']
	};

	var Device = (function (_React$Component) {
	    _inherits(Device, _React$Component);

	    function Device() {
	        _classCallCheck(this, Device);

	        _get(Object.getPrototypeOf(Device.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Device, [{
	        key: 'render',
	        value: function render() {
	            this.renderStyle();
	            return null;
	        }
	    }, {
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

	    return Device;
	})(_react2['default'].Component);

	exports.Device = Device;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _device = __webpack_require__(91);

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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _device = __webpack_require__(91);

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
/* 94 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _collections = __webpack_require__(89);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, Column);

	        _get(Object.getPrototypeOf(Column.prototype), 'constructor', this).call(this, props);

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
	        key: 'render',
	        value: function render() {
	            // consume props
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

	            // add classnames
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

	            return _react2['default'].createElement(this.props.component, other, _react2['default'].Children.count(this.props.children) !== 0 ? this.renderChildren() : []);
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

	            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { visible: 'only' });
	        }
	    }]);

	    return Column;
	})(_react2['default'].Component);

	exports.Column = Column;

/***/ },
/* 95 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    valigned: ['top', 'middle', 'bottom'],
	    visible: ['large screen', 'wide screen', 'computer', 'mobile', 'tablet']
	};

	var Row = (function (_React$Component) {
	    _inherits(Row, _React$Component);

	    function Row() {
	        _classCallCheck(this, Row);

	        _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Row, [{
	        key: 'render',
	        value: function render() {
	            // consume props
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

	    return Row;
	})(_react2['default'].Component);

	exports.Row = Row;

/***/ },
/* 96 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _collections = __webpack_require__(89);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        _classCallCheck(this, Grid);

	        _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).call(this, props);

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

	            if (this.props.columns !== false) {
	                if (this.props.columns > 0 && this.props.columns <= 16) {
	                    classes[_utilities.Numbers[this.props.columns] + ' column'] = true;
	                }
	            }

	            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { valigned: 'aligned' });
	        }
	    }]);

	    return Grid;
	})(_react2['default'].Component);

	exports.Grid = Grid;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports.Message = message;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	exports.Table = table;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _td = __webpack_require__(100);

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

	exports.Tr = tr;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	    var children = props.children;
	    var className = props.className;
	    var collapsing = props.collapsing;
	    var component = props.component;
	    var singleLine = props.singleLine;
	    var state = props.state;
	    var type = props.type;

	    var other = _objectWithoutProperties(props, ['children', 'className', 'collapsing', 'component', 'singleLine', 'state', 'type']);

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

	exports.Td = td;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	    classes[props.size] = !!props.size;

	    return classes;
	}

	var Form = function Form(props) {
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;

	    var other = _objectWithoutProperties(props, ['children', 'className', 'component']);

	    other.className = (0, _classnames2['default'])(className, getClasses(props));

	    return _react2['default'].createElement(component, other, children);
	};

	Form.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    inverted: _react2['default'].PropTypes.bool,
	    loading: _react2['default'].PropTypes.bool,
	    size: _react2['default'].PropTypes.string,
	    state: _react2['default'].PropTypes.oneOf(['success', 'error', 'warning'])
	};

	Form.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};

	exports.Form = Form;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _field = __webpack_require__(103);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	function getClasses(props) {
	    var classes = {};

	    if (props.fluid) {
	        var childCount = (0, _utilities.countChildren)(props.children, _field.Field);

	        if (childCount > 0 && childCount <= 12) {
	            classes[_utilities.Numbers[childCount]] = true;
	        }
	    }

	    classes.fields = props.defaultClasses;

	    return classes;
	}

	var Fields = function Fields(props) {
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;

	    var other = _objectWithoutProperties(props, ['children', 'className', 'component']);

	    other.className = (0, _classnames2['default'])(className, getClasses(props));

	    return _react2['default'].createElement(component, other, children);
	};

	Fields.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    fluid: _react2['default'].PropTypes.bool
	};

	Fields.defaultProps = {
	    component: 'div'
	};

	exports.Fields = Fields;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(4);

	var _modules = __webpack_require__(41);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	    var label = props.label;
	    var width = props.width;

	    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'label', 'width']);

	    other.className = (0, _classnames2['default'])(className, getClasses(props));

	    return _react2['default'].createElement(component, other, [(0, _utilities.hasFirstChild)(children, _modules.Checkbox) || (0, _utilities.hasFirstChild)(children, _modules.Checkboxes) || label == '' ? '' : renderLabel(props.label), children]);
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

	exports.Field = Field;

/***/ }
/******/ ])
});
;