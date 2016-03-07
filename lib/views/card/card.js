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

var Card = (_temp = _class = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));
    }

    _createClass(Card, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isCardChild: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var centered = _props.centered;
            var col = _props.col;
            var color = _props.color;
            var doubling = _props.doubling;
            var defaultClasses = _props.defaultClasses;
            var fluid = _props.fluid;

            var other = _objectWithoutProperties(_props, ['centered', 'col', 'color', 'doubling', 'defaultClasses', 'fluid']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses && !this.context.isChildCard,

                // component
                card: this.props.defaultClasses,

                // variations
                centered: this.props.centered,
                doubling: this.props.doubling,
                color: this.props.color,
                fluid: this.props.fluid,
                link: this.props.link || this.props.onClick
            };

            classes[this.props.color] = !!this.props.color;
            classes[this.props.col] = !!this.props.col;
            classes[this.props.doubling] = !!this.props.doubling;

            return classes;
        }
    }]);

    return Card;
}(_react2.default.Component), _class.propTypes = {
    centered: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    col: _react2.default.PropTypes.string,
    color: _react2.default.PropTypes.string,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    doubling: _react2.default.PropTypes.string,
    fluid: _react2.default.PropTypes.bool,
    link: _react2.default.PropTypes.bool,
    onClick: _react2.default.PropTypes.func
}, _class.contextTypes = {
    isCardChild: _react2.default.PropTypes.bool
}, _class.childContextTypes = {
    isCardChild: _react2.default.PropTypes.bool
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp);
exports.default = Card;
//# sourceMappingURL=card.js.map