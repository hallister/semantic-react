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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilities = require('../../utilities');

var _elements = require('../../elements');

var _views = require('../../views');

var _dropdownelement = require('./dropdownelement');

var _dropdownelement2 = _interopRequireDefault(_dropdownelement);

var _elementType = require('react-prop-types/lib/elementType');

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

        _this.onOutsideDropdownClick = function (e) {
            var _this$props = _this.props;
            var active = _this$props.active;
            var onRequestClose = _this$props.onRequestClose;

            if (!active) {
                return;
            }
            var dropdownElement = _reactDom2.default.findDOMNode(_this);
            if (dropdownElement) {
                if (!(0, _utilities.isNodeInRoot)(e.target, dropdownElement)) {
                    onRequestClose();
                }
            }
        };

        _this.menuRef = null;

        return _this;
    }

    /**
     * Outside dropdown click
     * @param {React.MouseEvent} e
     */


    _createClass(DropdownMenu, [{
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
            var menuValue = _props.menuValue;
            var onMenuChange = _props.onMenuChange;
            var onMenuItemClick = _props.onMenuItemClick;
            var onRequestClose = _props.onRequestClose;

            var other = _objectWithoutProperties(_props, ['active', 'enterAnimation', 'leaveAnimation', 'children', 'icon', 'label', 'menuComponent', 'menuValue', 'onMenuChange', 'onMenuItemClick', 'onRequestClose']);
            /* eslint-enable no-use-before-define */

            var MenuComponent = menuComponent || _views.Menu;

            return _react2.default.createElement(
                _dropdownelement2.default,
                _extends({}, other, {
                    active: active
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
                        enter: enterAnimation,
                        leave: leaveAnimation
                    },
                    active && _react2.default.createElement(
                        MenuComponent,
                        { key: 'menu',
                            menuValue: menuValue,
                            onMenuItemClick: onMenuItemClick,
                            onMenuChange: onMenuChange,
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
     * Active/Close menu
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
     * Callback will be called when menu wants to be closed (for ex. from outside click)
     */
    onRequestClose: _react2.default.PropTypes.func
}), _class.defaultProps = _extends({}, _dropdownelement2.default.defaultProps, {
    active: false,
    icon: 'dropdown',
    enterAnimation: {
        height: 'auto'
    },
    leaveAnimation: {
        height: 0
    },
    onMenuItemClick: function onMenuItemClick() {},
    onMenuChange: function onMenuChange() {},
    onRequestClose: function onRequestClose() {}
}), _temp);
exports.default = DropdownMenu;
//# sourceMappingURL=dropdownmenu.js.map