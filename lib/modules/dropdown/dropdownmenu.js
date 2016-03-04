'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropdownMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modules = require('../../modules');

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _elements = require('../../elements');

var _views = require('../../views');

var _decorator = require('react-onclickoutside/decorator');

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dropdown menu with animations
 */

var DropdownMenu = exports.DropdownMenu = (0, _decorator2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(DropdownMenu, _React$Component);

    function DropdownMenu(props) {
        _classCallCheck(this, DropdownMenu);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownMenu).call(this, props));

        _this.state = {
            active: props.active,
            visible: false
        };
        return _this;
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
            if (this.props.dropdownComponent !== 'div' || !this.props.label) {
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
         * Renders children items
         * @returns {Array}
         */

    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var newChildren = [];

            _react2.default.Children.forEach(this.props.children, function (child) {
                newChildren.push(_react2.default.cloneElement(child, {
                    key: child.props.children,
                    onClick: _this2.onMenuItemClick.bind(_this2)
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

            return _react2.default.createElement(
                _modules.Dropdown,
                _extends({}, other, {
                    active: this.state.active,
                    component: dropdownComponent,
                    visible: this.state.visible
                }),
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

    return DropdownMenu;
}(_react2.default.Component), _class2.propTypes = {
    /**
     * Should menu be opened when first rendered
     */
    active: _react2.default.PropTypes.bool,
    /**
     * Children nodes
     */
    children: _react2.default.PropTypes.node,
    /**
     * Pass additional component to use in dropdown, for example Button.
     * If you specify it, then default icon and label won't be rendered
     */
    dropdownComponent: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string, _react2.default.PropTypes.func]),
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
     * Usually is should be menu but with custom options applied (for example inverted)
     */
    menuComponent: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string, _react2.default.PropTypes.func])
}, _class2.defaultProps = {
    active: false,
    icon: 'dropdown',
    dropdownComponent: 'div',
    enterAnimation: {
        height: 'auto'
    },
    leaveAnimation: {
        height: 0
    }
}, _temp)) || _class;
//# sourceMappingURL=dropdownmenu.js.map