'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modules = require('../../modules');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = (_temp = _class = function (_Component) {
    _inherits(Accordion, _Component);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

        _this.state = {
            currentActive: null
        };
        return _this;
    }

    _createClass(Accordion, [{
        key: 'renderChildren',
        value: function renderChildren() {
            var index = 0;
            var element = null;

            return _react2.default.Children.map(this.props.children, function (child) {
                if (child.type == _modules.AccordionTitle) {
                    var boundClick = this._handleClick.bind(this, index);

                    element = _react2.default.cloneElement(child, {
                        active: this.state.currentActive === index,
                        onClick: boundClick
                    });
                } else if (child.type == _modules.AccordionBody) {
                    element = _react2.default.cloneElement(child, {
                        active: this.state.currentActive === index,
                        event: this.state.event
                    });
                    index++;
                } else {
                    return child;
                }

                return element;
            }.bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // positioning

                // types
                styled: this.props.styled,

                // variations
                fluid: this.props.fluid,
                inverted: this.props.inverted,

                // component
                accordion: this.props.defaultClasses
            };

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(this.props.className, classes) },
                this.renderChildren()
            );
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(key) {
            var active = undefined;

            if (key !== this.state.currentActive) {
                active = key;
            }

            this.setState({
                currentActive: active
            });
        }
    }]);

    return Accordion;
}(_react.Component), _class.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    defaultClasses: _react2.default.PropTypes.bool,
    fluid: _react2.default.PropTypes.bool,
    inverted: _react2.default.PropTypes.bool,
    styled: _react2.default.PropTypes.bool
}, _class.defaultProps = {
    defaultClasses: true
}, _temp);
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map