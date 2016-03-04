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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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
    PopupElement = (0, _radium2['default'])(PopupElement) || PopupElement;
    return PopupElement;
})(_react2['default'].Component);

exports.PopupElement = PopupElement;

/**
 * Default properties
 */
//# sourceMappingURL=popupelement.js.map