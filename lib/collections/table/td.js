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
    aligned: ['right', 'left', 'center', 'top', 'bottom']
};

function getClasses(props) {
    var classes = {
        collapsing: props.collapsing,

        positive: props.type === 'positive' && !props.state,
        negative: props.type === 'negative' && !props.state,
        warning: props.type === 'warning' && !props.state,

        active: props.state === 'active',
        error: props.state === 'error',
        disabled: props.state === 'disabled',

        'single line': props.singleLine
    };

    classes[props.type] = !!props.type;

    return (0, _utilities.validateClassProps)(classes, props, validProps);
}

var td = function td(props) {

    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var collapsing = props.collapsing;
    var component = props.component;
    var singleLine = props.singleLine;
    var state = props.state;
    var type = props.type;

    var other = _objectWithoutProperties(props, ['children', 'className', 'collapsing', 'component', 'singleLine', 'state', 'type']);
    /* eslint-enable no-use-before-define */

    other.className = (0, _classnames2.default)(className, getClasses(props));

    return _react2.default.createElement(component, other, children);
};

td.propTypes = {
    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'center', 'top', 'bottom']),
    className: _react2.default.PropTypes.any,
    collapsing: _react2.default.PropTypes.bool,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    singleLine: _react2.default.PropTypes.bool,
    type: _react2.default.PropTypes.oneOf(['negative', 'positive', 'warning'])
};

td.defaultProps = {
    component: 'td'
};

exports.default = td;
//# sourceMappingURL=td.js.map