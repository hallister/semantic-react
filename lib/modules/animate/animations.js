'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Animations = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animations = exports.Animations = (_temp = _class = function (_React$Component) {
    _inherits(Animations, _React$Component);

    function Animations() {
        _classCallCheck(this, Animations);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Animations).apply(this, arguments));
    }

    _createClass(Animations, [{
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            return _react2.default.Children.map(this.props.children, function (child) {
                var props = {};
                props.enter = _this2.props.enter !== false ? _this2.props.enter : false;
                props.leave = _this2.props.leave !== false ? _this2.props.leave : false;

                // ReactTransitionGroup will error on free-floating text.
                if (typeof child === 'string') {
                    return _react2.default.createElement(
                        'span',
                        null,
                        child
                    );
                }

                if (props.enter === false && props.leave === false || child.props.noAnimate === true) {
                    return child;
                } else {
                    return _react2.default.cloneElement(child, props);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var enter = _props.enter;
            var leave = _props.leave;

            var other = _objectWithoutProperties(_props, ['enter', 'leave']);
            /* eslint-enable no-use-before-define */

            var children = this.renderChildren();

            return _react2.default.createElement(
                _reactAddonsTransitionGroup2.default,
                other,
                children
            );
        }
    }]);

    return Animations;
}(_react2.default.Component), _class.propTypes = {
    children: _react2.default.PropTypes.node,
    enter: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
        ease: _react2.default.PropTypes.string,
        duration: _react2.default.PropTypes.number,
        from: _react2.default.PropTypes.object,
        to: _react2.default.PropTypes.object
    })]),
    leave: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
        ease: _react2.default.PropTypes.string,
        duration: _react2.default.PropTypes.number,
        from: _react2.default.PropTypes.object,
        to: _react2.default.PropTypes.object
    })])
}, _class.defaultProps = {
    enter: false,
    leave: false
}, _temp);
//# sourceMappingURL=animations.js.map