'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Option = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _menuitem = require('../../views/menu/menuitem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Select dropdown option
 */
var Option = exports.Option = (_temp = _class = function (_React$Component) {
    _inherits(Option, _React$Component);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Option).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            /* eslint-disable */
            if (this.props.active) {
                this.props.className = (0, _classnames2.default)(this.props.className, { selected: true });
            }
            /* eslint-enable */
            return _react2.default.createElement(
                _menuitem.MenuItem,
                this.props,
                this.props.children
            );
        }
    }]);

    return Option;
}(_react2.default.Component), _class.propTypes = _extends({}, _menuitem.MenuItem.propTypes, {
    children: _react2.default.PropTypes.node,
    value: _react2.default.PropTypes.string.isRequired
}), _temp);
//# sourceMappingURL=option.js.map