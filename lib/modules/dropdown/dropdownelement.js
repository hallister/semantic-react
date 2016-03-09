'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilities = require('../../utilities');

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    pointing: ['left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']
};

/**
 * Dropdown element. Base for Select and DropdownMenu.
 */
var DropdownElement = (_temp = _class = function (_React$Component) {
    _inherits(DropdownElement, _React$Component);

    function DropdownElement() {
        _classCallCheck(this, DropdownElement);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownElement).apply(this, arguments));
    }

    _createClass(DropdownElement, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isDropdownChild: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var component = _props.component;
            var children = _props.children;
            var defaultClasses = _props.defaultClasses;
            var compact = _props.compact;
            var disabled = _props.disabled;
            var error = _props.error;
            var loading = _props.loading;
            var fluid = _props.fluid;
            var inline = _props.inline;
            var floating = _props.floating;
            var pointing = _props.pointing;
            var scrolling = _props.scrolling;

            var other = _objectWithoutProperties(_props, ['component', 'children', 'defaultClasses', 'compact', 'disabled', 'error', 'loading', 'fluid', 'inline', 'floating', 'pointing', 'scrolling']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(other.className, this.getClasses());

            var Component = component;

            return _react2.default.createElement(
                Component,
                other,
                children
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                ui: this.props.defaultClasses,
                dropdown: this.props.defaultClasses,

                active: this.props.active,
                compact: this.props.compact,
                disabled: this.props.disabled,
                error: this.props.error,
                loading: this.props.loading,
                fluid: this.props.fluid,
                floating: this.props.floating,
                inline: this.props.inline,
                pointing: this.props.pointing,
                scrolling: this.props.scrolling
            };

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return DropdownElement;
}(_react2.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
    /**
     * Indicates status of dropdown. true for opened, false for closed
     */
    active: _react2.default.PropTypes.bool,
    /**
     * A compact dropdown has no minimum width
     */
    compact: _react2.default.PropTypes.bool,
    /**
     * A disabled dropdown menu or item does not allow user interaction
     */
    disabled: _react2.default.PropTypes.bool,
    /**
     * An errored dropdown can alert a user to a problem
     */
    error: _react2.default.PropTypes.bool,
    /**
     * A dropdown can take the full width of its parent
     */
    fluid: _react2.default.PropTypes.bool,
    /**
     * A dropdown can be formatted to appear inline in other content
     */
    inline: _react2.default.PropTypes.bool,
    /**
     * A dropdown menu can appear to be floating below an element.
     */
    floating: _react2.default.PropTypes.bool,
    /**
     * A dropdown can show that it is currently loading data
     */
    loading: _react2.default.PropTypes.bool,
    /**
     * A dropdown can be formatted so that its menu is pointing
     */
    pointing: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'])]),
    /**
     * A dropdown can have its menu scroll
     */
    scrolling: _react2.default.PropTypes.bool
}), _class.childContextTypes = {
    isDropdownChild: _react2.default.PropTypes.bool
}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    active: false
}), _temp);
exports.default = DropdownElement;
//# sourceMappingURL=dropdownelement.js.map