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

var _utilities = require('../../utilities');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    reversed: ['vertically']
};

var Device = (function (_React$Component) {
    _inherits(Device, _React$Component);

    function Device() {
        _classCallCheck(this, _Device);

        _get(Object.getPrototypeOf(_Device.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Device, [{
        key: 'renderStyle',
        value: function renderStyle() {
            var classes = {};

            if (this.props.width) {
                if (this.props.width > 0 && this.props.width <= 16) {
                    classes[_utilities.Numbers[this.props.width] + ' wide'] = true;
                }
            }

            if (this.props.only) {
                classes[this.props.type + ' only'] = true;
            } else {
                classes[this.props.type] = true;
            }

            classes = (0, _utilities.validateClassProps)(classes, this.props, validProps);

            return this.props.callback(classes, this.props.type);
        }
    }, {
        key: 'render',
        value: function render() {
            this.renderStyle();
            return null;
        }
    }], [{
        key: 'propTypes',
        value: {
            callback: _react2['default'].PropTypes.func,
            children: _react2['default'].PropTypes.node,
            only: _react2['default'].PropTypes.bool,
            reversed: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['vertically'])]),
            type: _react2['default'].PropTypes.oneOf(['mobile', 'computer', 'tablet']).isRequired,
            width: _react2['default'].PropTypes.number
        },
        enumerable: true
    }]);

    var _Device = Device;
    Device = (0, _radium2['default'])(Device) || Device;
    return Device;
})(_react2['default'].Component);

exports.Device = Device;
//# sourceMappingURL=device.js.map