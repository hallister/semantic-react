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

var _elements = require('../../elements');

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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
    LabeledButton = (0, _radium2['default'])(LabeledButton) || LabeledButton;
    return LabeledButton;
})(_react2['default'].Component);

exports['default'] = LabeledButton;
module.exports = exports['default'];
//# sourceMappingURL=labeledbutton.js.map