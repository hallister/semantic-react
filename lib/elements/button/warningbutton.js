'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WarningButton = function WarningButton(_ref) {
    var children = _ref.children;

    var other = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        _elements.Button,
        _extends({}, other, {
            color: 'yellow'
        }),
        children
    );
};

WarningButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: _react2.default.PropTypes.node
};

exports.default = WarningButton;
//# sourceMappingURL=warningbutton.js.map