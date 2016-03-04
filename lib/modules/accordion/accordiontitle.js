'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionTitle = (_temp = _class = function (_Component) {
    _inherits(AccordionTitle, _Component);

    function AccordionTitle(props) {
        _classCallCheck(this, AccordionTitle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionTitle).call(this, props));
    }

    _createClass(AccordionTitle, [{
        key: 'render',
        value: function render() {
            var classes = {
                // default

                // positioning

                // types

                // variations
                active: this.props.active,

                // component
                title: this.props.defaultClasses
            };

            return _react2.default.createElement(
                'div',
                {
                    className: (0, _classnames2.default)(this.props.className, classes),
                    onClick: this.props.onClick
                },
                _react2.default.createElement(_elements.Icon, { name: this.props.icon }),
                this.props.children
            );
        }
    }]);

    return AccordionTitle;
}(_react.Component), _class.propTypes = {
    active: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    defaultClasses: _react2.default.PropTypes.bool,
    icon: _react2.default.PropTypes.bool,
    onClick: _react2.default.PropTypes.func

}, _class.defaultProps = {
    defaultClasses: true,
    icon: 'dropdown'
}, _temp);
exports.default = AccordionTitle;
//# sourceMappingURL=accordiontitle.js.map