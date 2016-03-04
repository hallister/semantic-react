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

function renderContent(children) {
    var contentChildren = [];

    _react2.default.Children.forEach(children, function (child, index) {
        if (child.type === _elements.Images) {
            contentChildren.push(_react2.default.cloneElement(child, {
                defaultClasses: false,
                className: 'extra images'
            }));
        } else if (child.type !== _elements.Image && child.type !== _elements.Icon) {
            contentChildren.push(child);
        } else if ((child.type === _elements.Image || child.type === _elements.Icon) && index > 0) {
            contentChildren.push(child);
        }
    });

    return _react2.default.createElement(
        'div',
        { className: 'content' },
        contentChildren
    );
}

function renderLabel(children) {
    var labelChildren = [];

    _react2.default.Children.forEach(children, function (child, index) {
        // remove the Image default classes
        if ((child.type === _elements.Image || child.type === _elements.Icon) && index === 0) {
            if (child.type === _elements.Image) {
                labelChildren.push(_react2.default.cloneElement(child, {
                    key: 'eventLabel',
                    image: false,
                    defaultClasses: false
                }, child.children));
            } else {
                labelChildren.push(child);
            }
        }
    });

    return _react2.default.createElement(
        'div',
        { className: 'label' },
        labelChildren
    );
}

var Event = function Event(_ref) {
    var children = _ref.children;
    var className = _ref.className;
    var component = _ref.component;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);

    other.className = (0, _classnames2.default)(className, { event: true });

    return _react2.default.createElement(component, other, [renderLabel(children), renderContent(children)]);
};

Event.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
};

Event.defaultProps = {
    component: 'div'
};

Event = (0, _radium2.default)(Event);
exports.default = Event;
//# sourceMappingURL=event.js.map