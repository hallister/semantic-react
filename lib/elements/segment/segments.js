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

var Segments = (_temp = _class = function (_React$Component) {
    _inherits(Segments, _React$Component);

    function Segments() {
        _classCallCheck(this, Segments);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Segments).apply(this, arguments));
    }

    _createClass(Segments, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var compact = _props.compact;
            var defaultClasses = _props.defaultClasses;
            var horizontal = _props.horizontal;
            var piled = _props.piled;
            var raised = _props.raised;
            var stacked = _props.stacked;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'compact', 'defaultClasses', 'horizontal', 'piled', 'raised', 'stacked']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                ui: this.props.defaultClasses,
                segments: this.props.defaultClasses,
                horizontal: this.props.horizontal,
                raised: this.props.raised,
                stacked: this.props.stacked,
                piled: this.props.piled,
                compact: this.props.compact,
                inverted: this.props.inverted
            };
        }
    }]);

    return Segments;
}(_react2.default.Component), _class.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    compact: _react2.default.PropTypes.bool,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    horizontal: _react2.default.PropTypes.bool,
    inverted: _react2.default.PropTypes.bool,
    piled: _react2.default.PropTypes.bool,
    raised: _react2.default.PropTypes.bool,
    stacked: _react2.default.PropTypes.bool
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp);
exports.default = Segments;
//# sourceMappingURL=segments.js.map