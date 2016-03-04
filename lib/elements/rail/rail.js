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

var Rail = (function (_React$Component) {
    _inherits(Rail, _React$Component);

    function Rail() {
        _classCallCheck(this, _Rail);

        _get(Object.getPrototypeOf(_Rail.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Rail, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var attached = _props.attached;
            var children = _props.children;
            var className = _props.className;
            var close = _props.close;
            var defaultClasses = _props.defaultClasses;
            var dividing = _props.dividing;
            var floated = _props.floated;
            var internal = _props.internal;

            var other = _objectWithoutProperties(_props, ['attached', 'children', 'className', 'close', 'defaultClasses', 'dividing', 'floated', 'internal']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                ui: this.props.defaultClasses,

                right: this.props.floated === 'right',
                left: this.props.floated === 'left',

                // types
                attached: this.props.attached,
                very: this.props.closer,
                close: this.props.close || this.props.closer,
                dividing: this.props.dividing,
                internal: this.props.internal,

                // component
                rail: this.props.defaultClasses
            };
        }
    }], [{
        key: 'propTypes',
        value: {
            attached: _react2['default'].PropTypes.bool,
            children: _react2['default'].PropTypes.any,
            className: _react2['default'].PropTypes.node,
            close: _react2['default'].PropTypes.bool,
            closer: _react2['default'].PropTypes.bool,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            dividing: _react2['default'].PropTypes.bool,
            floated: _react2['default'].PropTypes.oneOf(['right', 'left']).isRequired,
            internal: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            component: 'div',
            close: false,
            defaultClasses: true
        },
        enumerable: true
    }]);

    var _Rail = Rail;
    Rail = (0, _radium2['default'])(Rail) || Rail;
    return Rail;
})(_react2['default'].Component);

exports['default'] = Rail;
module.exports = exports['default'];
//# sourceMappingURL=rail.js.map