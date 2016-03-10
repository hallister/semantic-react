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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = (_temp = _class = function (_React$Component) {
    _inherits(Rating, _React$Component);

    function Rating() {
        _classCallCheck(this, Rating);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Rating).apply(this, arguments));
    }

    _createClass(Rating, [{
        key: 'handleChange',
        value: function handleChange(index) {
            if (index === this.props.active) {
                this.props.onChange(0);
                return;
            }

            this.props.onChange(index);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var children = [];
            var classes = {
                icon: true
            };

            for (var i = 1; i <= this.props.max; i++) {
                classes.active = this.props.value >= i;

                if (this.props.onChange) {
                    children.push(_react2.default.createElement('i', {
                        className: (0, _classnames2.default)(classes),
                        key: i,
                        onClick: this.handleChange.bind(this, i) }));
                } else {
                    children.push(_react2.default.createElement('i', {
                        className: (0, _classnames2.default)(classes),
                        key: i }));
                }
            }

            return children;
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var defaultClasses = _props.defaultClasses;
            var heart = _props.heart;
            var max = _props.max;
            var size = _props.size;
            var star = _props.star;

            var other = _objectWithoutProperties(_props, ['defaultClasses', 'heart', 'max', 'size', 'star']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var _ref;

            return _ref = {
                ui: this.props.defaultClasses
            }, _defineProperty(_ref, this.props.size, !!this.props.size), _defineProperty(_ref, 'star', this.props.star), _defineProperty(_ref, 'heart', this.props.heart), _defineProperty(_ref, 'rating', this.props.defaultClasses), _ref;
        }
    }]);

    return Rating;
}(_react2.default.Component), _class.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    max: _react2.default.PropTypes.number,
    size: _react2.default.PropTypes.string,
    heart: _react2.default.PropTypes.bool,
    star: _react2.default.PropTypes.bool,
    value: _react2.default.PropTypes.number,
    onChange: _react2.default.PropTypes.func
}, _class.defaultProps = {
    children: null,
    component: 'div',
    defaultClasses: true,
    max: 5,
    value: 0
}, _temp);
exports.default = Rating;
//# sourceMappingURL=rating.js.map