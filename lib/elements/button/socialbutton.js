'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var SocialButton = function SocialButton(_ref) {
    var children = _ref.children;
    var name = _ref.name;

    var other = _objectWithoutProperties(_ref, ['children', 'name']);

    return _react2['default'].createElement(
        _elements.IconButton,
        _extends({}, other, {
            icon: _react2['default'].Children.count(children) === 0,
            name: name,
            social: true
        }),
        children
    );
};

SocialButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: _react2['default'].PropTypes.node,

    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: _react2['default'].PropTypes.string.isRequired
};

exports['default'] = SocialButton;
module.exports = exports['default'];
//# sourceMappingURL=socialbutton.js.map