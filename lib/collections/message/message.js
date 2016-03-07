'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
    attached: ['bottom', 'top'],
    type: ['info', 'warning', 'positive', 'negative'],
    state: ['success', 'error']
};

function getClasses(props) {
    var classes = {
        ui: props.defaultClasses,

        compact: props.compact,
        floating: props.floating,
        hidden: props.hidden,
        icon: props.icon,
        visible: props.visible,

        info: props.type === 'info' && !props.state,
        warning: props.type === 'warning' && !props.state,
        positive: props.type === 'positive' && !props.state,
        negative: props.type === 'negative' && !props.state,

        success: props.state === 'success',
        error: props.state === 'error',

        message: props.defaultClasses
    };

    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;
    return (0, _utilities.validateClassProps)(classes, props, validProps);
}

var message = function message(props) {
    /* eslint-disable no-use-before-define */
    var attached = props.attached;
    var children = props.children;
    var className = props.className;
    var color = props.color;
    var compact = props.compact;
    var component = props.component;
    var defaultClasses = props.defaultClasses;
    var floating = props.floating;
    var hidden = props.hidden;
    var icon = props.icon;
    var size = props.size;
    var state = props.state;
    var type = props.type;
    var visible = props.visible;

    var other = _objectWithoutProperties(props, ['attached', 'children', 'className', 'color', 'compact', 'component', 'defaultClasses', 'floating', 'hidden', 'icon', 'size', 'state', 'type', 'visible']);
    /* eslint-enable no-use-before-define */

    other.className = (0, _classnames2.default)(className, getClasses(props));

    return _react2.default.createElement(component, other, children);
};

message.propTypes = {
    attached: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['bottom', 'top']), _react2.default.PropTypes.bool]),
    className: _react2.default.PropTypes.any,
    color: _react2.default.PropTypes.string,
    compact: _react2.default.PropTypes.bool,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    floating: _react2.default.PropTypes.bool,
    hidden: _react2.default.PropTypes.bool,
    icon: _react2.default.PropTypes.bool,
    size: _react2.default.PropTypes.string,
    state: _react2.default.PropTypes.oneOf(['success', 'error']),
    type: _react2.default.PropTypes.oneOf(['info', 'warning', 'positive', 'negative']),
    visible: _react2.default.PropTypes.bool
};

message.defaultProps = {
    component: 'div',
    defaultClasses: true
};

exports.default = message;
//# sourceMappingURL=message.js.map