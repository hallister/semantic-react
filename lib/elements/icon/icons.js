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

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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
    Icons = (0, _radium2['default'])(Icons) || Icons;
    return Icons;
})(_react2['default'].Component);

exports['default'] = Icons;
module.exports = exports['default'];
//# sourceMappingURL=icons.js.map