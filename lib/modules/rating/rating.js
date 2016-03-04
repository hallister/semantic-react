'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Rating, _React$Component);

    function Rating(props) {
        _classCallCheck(this, Rating);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rating).call(this, props));

        _this.state = {
            active: null
        };
        return _this;
    }

    _createClass(Rating, [{
        key: 'onIconClick',
        value: function onIconClick(index) {
            // no need to reset it when it hasn't changed
            if (index === this.state.active) return;
            this.setState({
                active: index
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var children = [];
            var classes = {
                icon: true,
                active: false
            };

            for (var i = 0; i < this.props.max; i++) {
                if (this.state.active !== null && this.state.active >= i) {
                    classes.active = true;
                } else {
                    classes.active = false;
                }

                children.push(_react2.default.createElement('i', {
                    className: (0, _classnames2.default)(classes),
                    key: i,
                    onClick: this.onIconClick.bind(this, i) }));
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
            var classes = {
                ui: this.props.defaultClasses,

                size: _react2.default.PropTypes.string,

                // variations
                star: this.props.star,
                heart: this.props.heart,

                rating: this.props.defaultClasses
            };

            classes[this.props.size] = !!this.props.size;
            return classes;
        }
    }]);

    return Rating;
}(_react2.default.Component), _class2.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    heart: _react2.default.PropTypes.bool,
    max: _react2.default.PropTypes.number,
    size: _react2.default.PropTypes.string,
    star: _react2.default.PropTypes.bool
}, _class2.defaultProps = {
    children: null,
    component: 'div',
    defaultClasses: true,
    max: 5
}, _temp)) || _class;

exports.default = Rating;
//# sourceMappingURL=rating.js.map