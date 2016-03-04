'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function getClasses(props) {
    var classes = {
        ui: props.defaultClasses,

        loading: props.loading,

        error: props.state === 'error',
        success: props.state === 'success',
        warning: props.state === 'warning',

        inverted: props.inverted,

        form: props.defaultClasses
    };

    if (props.equalWidth) {
        classes['equal width'] = true;
    }

    classes[props.size] = !!props.size;

    return classes;
}

var Form = function Form(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var component = props.component;

    var other = _objectWithoutProperties(props, ['children', 'className', 'component']);

    /* eslint-enable no-use-before-define */
    other.className = (0, _classnames2['default'])(className, getClasses(props));

    return _react2['default'].createElement(component, other, children);
};

Form.propTypes = {
    children: _react2['default'].PropTypes.node,
    className: _react2['default'].PropTypes.any,
    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
    defaultClasses: _react2['default'].PropTypes.bool,
    equalWidth: _react2['default'].PropTypes.bool,
    inverted: _react2['default'].PropTypes.bool,
    loading: _react2['default'].PropTypes.bool,
    size: _react2['default'].PropTypes.string,
    state: _react2['default'].PropTypes.oneOf(['success', 'error', 'warning'])
};

Form.defaultProps = {
    component: 'div',
    defaultClasses: true
};

exports.Form = (0, _radium2['default'])(Form);
//# sourceMappingURL=form.js.map