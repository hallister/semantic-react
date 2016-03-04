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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modules = require('../../modules');

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _elements = require('../../elements');

var _views = require('../../views');

var _reactOnclickoutsideDecorator = require('react-onclickoutside/decorator');

var _reactOnclickoutsideDecorator2 = _interopRequireDefault(_reactOnclickoutsideDecorator);

/**
 * Dropdown menu with animations
 */

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
    DropdownMenu = (0, _reactOnclickoutsideDecorator2['default'])(DropdownMenu) || DropdownMenu;
    return DropdownMenu;
})(_react2['default'].Component);

exports.DropdownMenu = DropdownMenu;
//# sourceMappingURL=dropdownmenu.js.map