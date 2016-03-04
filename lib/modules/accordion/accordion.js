'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modules = require('../../modules');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Accordion = (function (_Component) {
    _inherits(Accordion, _Component);

    _createClass(Accordion, null, [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            defaultClasses: _react2['default'].PropTypes.bool,
            fluid: _react2['default'].PropTypes.bool,
            inverted: _react2['default'].PropTypes.bool,
            styled: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            defaultClasses: true
        },
        enumerable: true
    }]);

    function Accordion(props) {
        _classCallCheck(this, _Accordion);

        _get(Object.getPrototypeOf(_Accordion.prototype), 'constructor', this).call(this, props);

        this.state = {
            currentActive: null
        };
    }

    _createClass(Accordion, [{
        key: 'renderChildren',
        value: function renderChildren() {
            var index = 0;
            var element = null;

            return _react2['default'].Children.map(this.props.children, (function (child) {
                if (child.type == _modules.AccordionTitle) {
                    var boundClick = this._handleClick.bind(this, index);

                    element = _react2['default'].cloneElement(child, {
                        active: this.state.currentActive === index,
                        onClick: boundClick
                    });
                } else if (child.type == _modules.AccordionBody) {
                    element = _react2['default'].cloneElement(child, {
                        active: this.state.currentActive === index,
                        event: this.state.event
                    });
                    index++;
                } else {
                    return child;
                }

                return element;
            }).bind(this));
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

            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(this.props.className, classes) },
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

    var _Accordion = Accordion;
    Accordion = (0, _radium2['default'])(Accordion) || Accordion;
    return Accordion;
})(_react.Component);

exports.Accordion = Accordion;
//# sourceMappingURL=accordion.js.map