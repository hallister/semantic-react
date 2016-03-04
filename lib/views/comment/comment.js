'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function renderChildren(children) {
    var commentChildren = [];
    var contentChildren = [];

    _react2.default.Children.forEach(children, function (child) {
        // remove the Image default classes
        if (child.type === _elements.Image) {
            commentChildren.push(_react2.default.cloneElement(child, {
                component: 'a',
                avatar: true,
                key: 'commentAvatar',
                defaultClasses: false
            }, child.children));
        } else {
            return contentChildren.push(child);
        }
    });

    commentChildren.push(_react2.default.createElement(
        _elements.Content,
        { key: 'commentContent' },
        contentChildren
    ));

    return commentChildren;
}

var Comment = function Comment(_ref) {
    var children = _ref.children;
    var className = _ref.className;
    var component = _ref.component;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);

    other.className = (0, _classnames2.default)(className, { comment: true });

    return _react2.default.createElement(component, other, renderChildren(children));
};

Comment.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
};

Comment.defaultProps = {
    component: 'div'
};

Comment = (0, _radium2.default)(Comment);
exports.default = Comment;
//# sourceMappingURL=comment.js.map