'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Currently header/dividers are only headers. Maybe do both?
var Divider = (_temp = _class = function (_React$Component) {
    _inherits(Divider, _React$Component);

    function Divider() {
        _classCallCheck(this, Divider);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Divider).apply(this, arguments));
    }

    _createClass(Divider, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
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
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
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
    }]);

    return Divider;
}(_react2.default.Component), _class.propTypes = {
    aligned: _react2.default.PropTypes.oneOf(['horizontal', 'vertical']),
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    clearing: _react2.default.PropTypes.bool,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    header: _react2.default.PropTypes.bool,
    hidden: _react2.default.PropTypes.bool,
    inverted: _react2.default.PropTypes.bool,
    spacing: _react2.default.PropTypes.oneOf(['fitted', 'padded'])
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp);
exports.default = Divider;
//# sourceMappingURL=divider.js.map