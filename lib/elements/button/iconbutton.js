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

function renderChildren(children, name, social, iconColor) {
    var componentChildren = [];

    componentChildren.push(_react2['default'].createElement(_elements.Icon, {
        color: social ? null : iconColor,
        key: 'icon',
        name: name }));

    _react2['default'].Children.forEach(children, function (child) {
        componentChildren.push(child);
    });

    return componentChildren;
}

var IconButton = function IconButton(_ref) {
    var children = _ref.children;
    var iconColor = _ref.iconColor;
    var name = _ref.name;
    var social = _ref.social;

    var other = _objectWithoutProperties(_ref, ['children', 'iconColor', 'name', 'social']);

    return _react2['default'].createElement(
        _elements.Button,
        _extends({}, other, {
            icon: _react2['default'].Children.count(children) === 0,
            social: social ? name : ''
        }),
        renderChildren(children, name, social, iconColor)
    );
};

IconButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: _react2['default'].PropTypes.node,

    /**
     * Adds a SemanticUI color class to the icon.
     */
    iconColor: _react2['default'].PropTypes.string,

    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: _react2['default'].PropTypes.string,

    /**
     * Renders as a social button if true (see SocialButton);
     */
    social: _react2['default'].PropTypes.bool
};

exports['default'] = IconButton;
module.exports = exports['default'];
//# sourceMappingURL=iconbutton.js.map