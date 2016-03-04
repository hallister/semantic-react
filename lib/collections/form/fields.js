'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _field = require('./field');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    var classes = {
        grouped: props.grouped,
        inline: props.inline
    };

    if (props.fluid) {
        var childCount = (0, _utilities.countChildren)(props.children, _field.Field);

        if (childCount > 0 && childCount <= 12) {
            classes[_utilities.Numbers[childCount]] = true;
        }
    }

    if (props.equalWidth) {
        classes['equal width'] = true;
    }

    classes.fields = props.defaultClasses;

    return classes;
}

var Fields = function Fields(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var component = props.component;

    var other = _objectWithoutProperties(props, ['children', 'className', 'component']);
    /* eslint-enable no-use-before-define */


    other.className = (0, _classnames2.default)(className, getClasses(props));

    return _react2.default.createElement(component, other, children);
};

Fields.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    equalWidth: _react2.default.PropTypes.bool,
    fluid: _react2.default.PropTypes.bool,
    grouped: _react2.default.PropTypes.bool,
    inline: _react2.default.PropTypes.bool
};

Fields.defaultProps = {
    component: 'div',
    defaultClasses: true
};

exports.Fields = (0, _radium2.default)(Fields);
//# sourceMappingURL=fields.js.map