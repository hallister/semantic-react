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

var validProps = {
    flipped: ['horizontally', 'vertically'],
    rotated: ['clockwise', 'counterclockwise']
};

var Icon = (_temp = _class = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var bordered = _props.bordered;
            var circular = _props.circular;
            var color = _props.color;
            var component = _props.component;
            var corner = _props.corner;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var fitted = _props.fitted;
            var flipped = _props.flipped;
            var inverted = _props.inverted;
            var link = _props.link;
            var loading = _props.loading;
            var name = _props.name;
            var rotated = _props.rotated;
            var size = _props.size;

            var other = _objectWithoutProperties(_props, ['bordered', 'circular', 'color', 'component', 'corner', 'defaultClasses', 'disabled', 'fitted', 'flipped', 'inverted', 'link', 'loading', 'name', 'rotated', 'size']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default

                // variations
                bordered: this.props.bordered,
                circular: this.props.circular,
                corner: this.props.corner,
                disabled: this.props.disabled,
                fitted: this.props.fitted,
                link: this.props.link || this.props.onClick,
                inverted: this.props.inverted,
                loading: this.props.loading,

                // component
                icon: this.props.defaultClasses
            };

            // handle all string or mixed string/bool props

            // classes[this.props.aligned] = !!this.props.aligned;
            classes[this.props.size] = !!this.props.size;
            classes[this.props.color] = !!this.props.color;
            classes[this.props.name] = !!this.props.name;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Icon;
}(_react2.default.Component), _class.propTypes = {
    bordered: _react2.default.PropTypes.bool,
    circular: _react2.default.PropTypes.bool,
    className: _react2.default.PropTypes.node,
    color: _react2.default.PropTypes.string,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    corner: _react2.default.PropTypes.bool,
    defaultClasses: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    fitted: _react2.default.PropTypes.bool,
    flipped: _react2.default.PropTypes.oneOf(['horizontally', 'vertically']),
    inverted: _react2.default.PropTypes.bool,
    link: _react2.default.PropTypes.bool,
    loading: _react2.default.PropTypes.bool,
    name: _react2.default.PropTypes.string.isRequired,
    onClick: _react2.default.PropTypes.func,
    rotated: _react2.default.PropTypes.oneOf(['clockwise', 'counterclockwise']),
    size: _react2.default.PropTypes.string
}, _class.defaultProps = {
    component: 'i',
    defaultClasses: true
}, _temp);
exports.default = Icon;
//# sourceMappingURL=icon.js.map