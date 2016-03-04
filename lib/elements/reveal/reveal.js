'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    move: ['right', 'up', 'down'],
    rotate: ['left']
};

var Reveal = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Reveal, _React$Component);

    function Reveal() {
        _classCallCheck(this, Reveal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Reveal).apply(this, arguments));
    }

    _createClass(Reveal, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var active = _props.active;
            var circular = _props.circular;
            var children = _props.children;
            var className = _props.className;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var fade = _props.fade;
            var instant = _props.instant;
            var image = _props.image;
            var move = _props.move;
            var rotate = _props.rotate;
            var size = _props.size;

            var other = _objectWithoutProperties(_props, ['active', 'circular', 'children', 'className', 'defaultClasses', 'disabled', 'fade', 'instant', 'image', 'move', 'rotate', 'size']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // types
                active: this.props.active,
                circular: this.props.circular,
                instant: this.props.instant,

                // states
                disabled: this.props.disabled,

                // transitions
                fade: this.props.fade,
                move: this.props.move,
                rotate: this.props.rotate,

                // sub-defaults (order can matter?)
                reveal: this.props.defaultClasses,
                image: this.props.image || (0, _utilities.hasDescendant)(this.props.children, _elements.Image)
            };

            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Reveal;
}(_react2.default.Component), _class2.propTypes = {
    active: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    circular: _react2.default.PropTypes.bool,
    className: _react2.default.PropTypes.node,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    fade: _react2.default.PropTypes.bool,
    image: _react2.default.PropTypes.bool,
    instant: _react2.default.PropTypes.bool,
    move: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['right', 'up', 'down']), _react2.default.PropTypes.bool]),
    rotate: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['left']), _react2.default.PropTypes.bool]),
    // required?
    size: _react2.default.PropTypes.string,
    type: _react2.default.PropTypes.string
}, _class2.defaultProps = {
    component: 'div',
    defaultClasses: true,
    image: false,
    move: false,
    rotate: false,
    size: 'small'
}, _temp)) || _class;

exports.default = Reveal;
//# sourceMappingURL=reveal.js.map