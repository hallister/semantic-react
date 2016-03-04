'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _device = require('./device');

var Tablet = function Tablet(props) {
    return _react2['default'].createElement(
        _device.Device,
        _extends({}, props, {
            type: 'tablet'
        }),
        props.children
    );
};

Tablet.propTypes = {
    children: _react2['default'].PropTypes.node
};

exports.Tablet = Tablet;
//# sourceMappingURL=tablet.js.map