'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    attached: ['top', 'bottom'],
    fitted: ['horizontally', 'vertically'],
    floated: ['right', 'left']
};

/**
 * Menu. Could be simple or controlled. Controlled menu will be activated by providing value property and will manage
 * current active item and fire onChange callback when value was changed
 */
var Menu = (_temp = _class = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));
    }

    _createClass(Menu, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isMenuChild: true
            };
        }
    }, {
        key: 'onMenuItemClick',
        value: function onMenuItemClick(value, event) {
            event.stopPropagation();
            event.preventDefault();

            this.props.onMenuItemClick(value);
            // Call onMenuChange callback when needed
            if (typeof this.props.menuValue !== 'undefined') {
                // Multiple menu selection
                if (Array.isArray(this.props.menuValue)) {
                    if (this.props.menuValue.indexOf(value) !== -1) {
                        // Unselect menu item
                        this.props.onMenuChange(this.props.menuValue.filter(function (val) {
                            return val !== value;
                        }));
                    } else {
                        // select menu item
                        this.props.onMenuChange([].concat(_toConsumableArray(this.props.menuValue), [value]));
                    }
                    // Single menu selection
                } else {
                        // calling with null if clicking on same item, because we might want to unselect menu item
                        this.props.onMenuChange(this.props.menuValue !== value ? value : null);
                    }
            }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            // should deep traverse?
            return _react2.default.Children.map(this.props.children, function (child) {
                // Process if a child has menuValue property
                if (typeof child.props.menuValue !== 'undefined') {
                    return _react2.default.cloneElement(child, {
                        // If child has active property, then pass it
                        active: typeof child.props.active !== 'undefined' ? child.props.active : _this2.isActiveItem(child.props.menuValue),
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
            var floated = _props.floated;
            var inverted = _props.inverted;
            var pagination = _props.pagination;
            var pointing = _props.pointing;
            var right = _props.right;
            var secondary = _props.secondary;
            var tabular = _props.tabular;
            var text = _props.text;
            var menuValue = _props.menuValue;
            var vertical = _props.vertical;

            var other = _objectWithoutProperties(_props, ['attached', 'borderless', 'component', 'even', 'fitted', 'fixed', 'fluid', 'floated', 'inverted', 'pagination', 'pointing', 'right', 'secondary', 'tabular', 'text', 'menuValue', 'vertical']);
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

        /**
         * Returns true if it should be active item
         * @param value
         */

    }, {
        key: 'isActiveItem',
        value: function isActiveItem(value) {
            if (typeof value === 'undefined') return false;
            if (typeof this.props.menuValue === 'undefined') return false;
            if (Array.isArray(this.props.menuValue) && this.props.menuValue.indexOf(value) !== -1) return true;
            return !!(!Array.isArray(this.props.menuValue) && this.props.menuValue === value);
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
                floated: this.props.floated,
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
     * Float left or right
     */
    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
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
    menuValue: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]))]),
    /**
     * Callback for active item change. Will not be fired if menuValue was omitted
     * Will pass new menuValue or array of new menuValue
     * If all items were unselected would pass null if menuValue is single value or empty array if menuValue is array
     */
    onMenuChange: _react2.default.PropTypes.func,
    /**
     * Callback for menu item click 
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
//# sourceMappingURL=menu.js.map