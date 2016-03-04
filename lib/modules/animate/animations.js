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

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var Animations = (function (_React$Component) {
    _inherits(Animations, _React$Component);

    function Animations() {
        _classCallCheck(this, Animations);

        _get(Object.getPrototypeOf(Animations.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Animations, [{
        key: 'renderChildren',
        value: function renderChildren() {
            var _this = this;

            return _react2['default'].Children.map(this.props.children, function (child) {
                var props = {};
                props.enter = _this.props.enter !== false ? _this.props.enter : false;
                props.leave = _this.props.leave !== false ? _this.props.leave : false;

                // ReactTransitionGroup will error on free-floating text.
                if (typeof child === 'string') {
                    return _react2['default'].createElement(
                        'span',
                        null,
                        child
                    );
                }

                if (props.enter === false && props.leave === false || child.props.noAnimate === true) {
                    return child;
                } else {
                    return _react2['default'].cloneElement(child, props);
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

            return _react2['default'].createElement(
                _reactAddonsTransitionGroup2['default'],
                other,
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.node,
            enter: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
                ease: _react2['default'].PropTypes.string,
                duration: _react2['default'].PropTypes.number,
                from: _react2['default'].PropTypes.object,
                to: _react2['default'].PropTypes.object
            })]),
            leave: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
                ease: _react2['default'].PropTypes.string,
                duration: _react2['default'].PropTypes.number,
                from: _react2['default'].PropTypes.object,
                to: _react2['default'].PropTypes.object
            })])
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            enter: false,
            leave: false
        },
        enumerable: true
    }]);

    return Animations;
})(_react2['default'].Component);

exports.Animations = Animations;
//# sourceMappingURL=animations.js.map