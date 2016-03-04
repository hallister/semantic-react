'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Card = (function (_React$Component) {
    _inherits(Card, _React$Component);

    _createClass(Card, null, [{
        key: 'propTypes',
        value: {
            centered: _react2['default'].PropTypes.bool,
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            col: _react2['default'].PropTypes.string,
            color: _react2['default'].PropTypes.string,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            doubling: _react2['default'].PropTypes.string,
            fluid: _react2['default'].PropTypes.bool,
            link: _react2['default'].PropTypes.bool,
            onClick: _react2['default'].PropTypes.func
        },
        enumerable: true
    }, {
        key: 'contextTypes',
        value: {
            isCardChild: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'childContextTypes',
        value: {
            isCardChild: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            component: 'div',
            defaultClasses: true
        },
        enumerable: true
    }]);

    function Card(props) {
        _classCallCheck(this, _Card);

        _get(Object.getPrototypeOf(_Card.prototype), 'constructor', this).call(this, props);
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

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, this.props.children);
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

    var _Card = Card;
    Card = (0, _radium2['default'])(Card) || Card;
    return Card;
})(_react2['default'].Component);

exports.Card = Card;
//# sourceMappingURL=card.js.map