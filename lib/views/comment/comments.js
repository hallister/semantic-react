'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function getClasses(props) {
    var classes = {
        ui: props.defaultClasses,

        collapsed: props.collapsed,
        minimal: props.minimal,
        threaded: props.threaded,

        comments: props.defaultClasses
    };

    return classes;
}

var comments = function comments(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var collapsed = props.collapsed;
    var component = props.component;
    var defaultClasses = props.defaultClasses;
    var minimal = props.minimal;
    var threaded = props.threaded;

    var other = _objectWithoutProperties(props, ['children', 'className', 'collapsed', 'component', 'defaultClasses', 'minimal', 'threaded']);

    /* eslint-enable no-use-before-define */

    other.className = (0, _classnames2['default'])(className, getClasses(props));

    return _react2['default'].createElement(component, other, children);
};

comments.propTypes = {
    children: _react2['default'].PropTypes.node,
    className: _react2['default'].PropTypes.any,
    collapsed: _react2['default'].PropTypes.bool,
    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
    defaultClasses: _react2['default'].PropTypes.bool,
    minimal: _react2['default'].PropTypes.bool,
    threaded: _react2['default'].PropTypes.bool
};

comments.defaultProps = {
    component: 'div',
    defaultClasses: true
};

exports.Comments = (0, _radium2['default'])(comments);
//# sourceMappingURL=comments.js.map