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

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    pointing: ['left', 'right', 'bottom left', 'bottom right', 'top left', 'top right']
};

var Dropdown = (_temp = _class = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));
    }

    _createClass(Dropdown, [{
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
            var active = _props.active;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var inverted = _props.inverted;
            var multiple = _props.multiple;

            var other = _objectWithoutProperties(_props, ['active', 'component', 'defaultClasses', 'disabled', 'inverted', 'multiple']);
            /* eslint-enable no-use-before-define */


            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            if (this.props.component == Dropdown) {
                component = 'div';
            } else {
                component = this.props.component;
            }

            return _react2.default.createElement(component, other, [this.props.children]);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // positioning

                // types
                inline: this.props.inline,
                compact: this.props.compact,
                scrolling: this.props.scrolling,
                selection: this.props.selection,
                floating: this.props.floating,
                fluid: this.props.fluid,
                labeled: this.props.labeled,
                search: this.props.search,
                multiple: this.props.multiple,
                pointing: this.props.pointing,

                // state
                active: this.props.active,
                visible: this.props.visible,
                error: this.props.error,
                disabled: this.props.disabled,

                // component
                dropdown: this.props.defaultClasses

                // variations
            };
            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Dropdown;
}(_react2.default.Component), _class.propTypes = {
    active: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    compact: _react2.default.PropTypes.bool,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string, _react2.default.PropTypes.func]),
    defaultClasses: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    error: _react2.default.PropTypes.bool,
    floating: _react2.default.PropTypes.bool,
    fluid: _react2.default.PropTypes.bool,
    inline: _react2.default.PropTypes.bool,
    inverted: _react2.default.PropTypes.bool,
    labeled: _react2.default.PropTypes.bool,
    multiple: _react2.default.PropTypes.bool,
    pointing: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.string]),
    scrolling: _react2.default.PropTypes.bool,
    search: _react2.default.PropTypes.bool,
    selection: _react2.default.PropTypes.bool,
    visible: _react2.default.PropTypes.bool
}, _class.childContextTypes = {
    isDropdownChild: _react2.default.PropTypes.bool
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp);
exports.default = Dropdown;
//# sourceMappingURL=dropdown.js.map