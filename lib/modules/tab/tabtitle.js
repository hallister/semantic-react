'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabTitle = undefined;

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

var TabTitle = exports.TabTitle = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(TabTitle, _React$Component);

    function TabTitle() {
        _classCallCheck(this, TabTitle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TabTitle).apply(this, arguments));
    }

    _createClass(TabTitle, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var position = _props.position;
            var title = _props.title;
            var type = _props.type;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'position', 'title', 'type']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                ui: this.props.defaultClasses,

                // position
                'top attached': this.props.type === 'tab',

                pointing: this.props.type == 'menu',
                'secondary menu': this.props.type == 'pill' || this.props.type == 'menu',
                'tabular menu': this.props.type == 'tab'
            };
        }
    }]);

    return TabTitle;
}(_react2.default.Component), _class2.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    position: _react2.default.PropTypes.oneOf(['top', 'bottom']),
    title: _react2.default.PropTypes.string,
    type: _react2.default.PropTypes.oneOf(['tab', 'menu', 'pill'])
}, _class2.defaultProps = {
    component: 'div',
    defaultClasses: true,
    position: 'top'
}, _temp)) || _class;
//# sourceMappingURL=tabtitle.js.map