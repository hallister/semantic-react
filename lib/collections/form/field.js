'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _modules = require('../../modules');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    var classes = {
        disabled: props.state === 'disabled',
        error: props.state === 'error',

        required: props.required,
        inline: props.inline,
        grouped: props.grouped
    };

    if (props.width) {
        if (props.width > 0 && props.width <= 16) {
            classes[_utilities.Numbers[props.width] + ' wide'] = true;
        }
    }

    classes.field = props.defaultClasses;

    return classes;
}

// check if child is checkbox first?
function renderLabel(label) {
    return _react2.default.createElement(
        'label',
        { key: label + 'Label' },
        label
    );
}

var Field = function Field(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var component = props.component;
    var label = props.label;
    var width = props.width;

    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'label', 'width']);
    /* eslint-enable no-use-before-define */


    other.className = (0, _classnames2.default)(className, getClasses(props));

    return _react2.default.createElement(component, other, [(0, _utilities.hasFirstChild)(children, _modules.Checkbox) || (0, _utilities.hasFirstChild)(children, _modules.Checkboxes) || !label || label == '' ? null : renderLabel(props.label), children]);
};

Field.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    grouped: _react2.default.PropTypes.bool,
    inline: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.string,
    required: _react2.default.PropTypes.bool,
    state: _react2.default.PropTypes.oneOf(['disabled', 'error']),
    width: _react2.default.PropTypes.number
};

Field.defaultProps = {
    component: 'div',
    defaultClasses: true
};

exports.default = Field;
//# sourceMappingURL=field.js.map