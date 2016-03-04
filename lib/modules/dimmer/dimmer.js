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

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _utilities = require('../../utilities');

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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
    Dimmer = (0, _radium2['default'])(Dimmer) || Dimmer;
    return Dimmer;
})(_react2['default'].Component);

exports.Dimmer = Dimmer;
//# sourceMappingURL=dimmer.js.map