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

var Detail = (function (_React$Component) {
    _inherits(Detail, _React$Component);

    function Detail() {
        _classCallCheck(this, _Detail);

        _get(Object.getPrototypeOf(_Detail.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Detail, [{
        key: 'render',
        value: function render() {
            var Component = this.props.onClick ? 'a' : 'div';
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var defaultClasses = _props.defaultClasses;

            var other = _objectWithoutProperties(_props, ['defaultClasses']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                detail: this.props.defaultClasses
            };
        }
    }], [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            onClick: _react2['default'].PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            defaultClasses: true
        },
        enumerable: true
    }]);

    var _Detail = Detail;
    Detail = (0, _radium2['default'])(Detail) || Detail;
    return Detail;
})(_react2['default'].Component);

exports['default'] = Detail;
module.exports = exports['default'];
//# sourceMappingURL=detail.js.map