'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = (_temp = _class = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loader).apply(this, arguments));
    }

    _createClass(Loader, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */

            var other = _objectWithoutProperties(this.props, []);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                ui: this.props.defaultClasses,

                active: this.props.state === 'active',
                centered: this.props.centered,
                indeterminate: this.props.state === 'indeterminate',
                inline: this.props.inline,
                inverted: this.props.inverted,
                text: this.props.text || (0, _utilities.hasChild)(this.props.children, 'string'),
                disabled: this.props.state === 'disabled',

                // component
                loader: this.props.defaultClasses
            };

            classes[this.props.size] = !!this.props.size;

            return classes;
        }
    }]);

    return Loader;
}(_react2.default.Component), _class.propTypes = {
    centered: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    inline: _react2.default.PropTypes.bool,
    inverted: _react2.default.PropTypes.bool,
    size: _react2.default.PropTypes.string,
    state: _react2.default.PropTypes.oneOf(['active', 'indeterminate', 'disabled']),
    text: _react2.default.PropTypes.bool
}, _class.defaultProps = {
    defaultClasses: true,
    component: 'div'
}, _temp);
exports.default = Loader;
//# sourceMappingURL=loader.js.map