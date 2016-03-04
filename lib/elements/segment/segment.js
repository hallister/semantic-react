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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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
    Segment = (0, _radium2['default'])(Segment) || Segment;
    return Segment;
})(_react2['default'].Component);

exports['default'] = Segment;
module.exports = exports['default'];
//# sourceMappingURL=segment.js.map