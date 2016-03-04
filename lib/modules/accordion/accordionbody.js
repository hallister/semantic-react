'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccordionBody = undefined;

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

// TODO: image and horizontal list examples

var AccordionBody = exports.AccordionBody = (_temp = _class = function (_Component) {
    _inherits(AccordionBody, _Component);

    function AccordionBody(props) {
        _classCallCheck(this, AccordionBody);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionBody).call(this, props));
    }

    _createClass(AccordionBody, [{
        key: 'render',
        value: function render() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // positioning

                // types

                // states

                // variations

                // component
                content: true,
                active: true
            };

            /*
            let didMount = function() {
                this.setScrollHeight();
                let computedStyle = window.getComputedStyle(ReactDOM.findDOMNode(this), null);
                  this.state.paddingTop = parseFloat(computedStyle.getPropertyValue('padding-top'));
                this.state.paddingBottom = parseFloat(computedStyle.getPropertyValue('padding-bottom'));
            };
            */

            //
            var animation = {
                state: this.props.active,
                enterState: {
                    name: 'slideDown',
                    ease: 'cubic-out',
                    duration: 250,
                    options: {
                        easing: 'cubic-out'
                    }
                },
                exitState: {
                    name: 'slideUp',
                    duration: 300,
                    options: {
                        easing: 'cubic-out'
                    }
                }
            };

            var childAnimation = {
                state: this.props.active,
                enterState: {
                    name: 'fadeIn',
                    duration: 300,
                    options: {
                        easing: 'cubic-in'
                    }
                },
                exitState: {
                    name: 'fadeOut',
                    duration: 200,
                    options: {
                        easing: 'cubic-out'
                    }
                }
            };

            // handle all string or mixed string/bool props
            return _react2.default.createElement(
                _modules.Animate,
                {
                    animation: animation,
                    className: (0, _classnames2.default)(classes),
                    key: 'animate'
                },
                _react2.default.createElement(
                    _modules.Animate,
                    { animation: childAnimation },
                    this.props.children
                )
            );
        }
    }]);

    return AccordionBody;
}(_react.Component), _class.propTypes = {
    active: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    defaultClasses: _react2.default.PropTypes.bool
}, _class.defaultProps = {
    defaultClasses: true
}, _temp);
//# sourceMappingURL=accordionbody.js.map