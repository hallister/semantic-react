'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

var Buttons = (function (_React$Component) {
    _inherits(Buttons, _React$Component);

    function Buttons() {
        _classCallCheck(this, _Buttons);

        _get(Object.getPrototypeOf(_Buttons.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Buttons, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isAttached: !!this.props.attached,
                isIconButtons: !!this.props.icon,
                isLabeledButtons: !!this.props.labeled
            };
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var attached = _props.attached;
            var basic = _props.basic;
            var children = _props.children;
            var className = _props.className;
            var color = _props.color;
            var compact = _props.compact;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var equal = _props.equal;
            var floated = _props.floated;
            var icon = _props.icon;
            var inverted = _props.inverted;
            var labeled = _props.labeled;
            var size = _props.size;
            var vertical = _props.vertical;

            var other = _objectWithoutProperties(_props, ['attached', 'basic', 'children', 'className', 'color', 'compact', 'component', 'defaultClasses', 'equal', 'floated', 'icon', 'inverted', 'labeled', 'size', 'vertical']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // types
                basic: this.props.basic,
                icon: this.props.icon || (0, _utilities.isEveryChild)(this.props.children, _elements.IconButton),
                inverted: this.props.inverted,
                labeled: this.props.labeled || (0, _utilities.isEveryChild)(this.props.children, _elements.LabeledButton),

                // variations
                attached: this.props.attached,
                compact: this.props.compact,
                vertical: this.props.vertical,

                // component
                buttons: this.props.defaultClasses
            };

            var childCount = _react2['default'].Children.count(this.props.children);

            // buttons group with >0 buttons that are all of equal width
            if (this.props.equal) {
                if (childCount > 1 && childCount <= 12) {
                    classes[_utilities.Numbers[childCount]] = true;
                } else {
                    classes['fluid'] = true;
                }
            }

            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }], [{
        key: 'propTypes',
        value: {
            /**
             * It's attached to some other attachable component.
             */
            attached: _react2['default'].PropTypes.oneOf(['bottom', 'top']),

            /**
             * Adds simple styling to the component.
             */
            basic: _react2['default'].PropTypes.bool,

            /**
             * The child nodes of the component.
             */
            children: _react2['default'].PropTypes.node,

            /**
             * Adds additional classes to the component.
             */
            className: _react2['default'].PropTypes.node,

            /**
             * Adds a SemanticUI color class.
             */
            color: _react2['default'].PropTypes.string,

            /**
             * Reduces the padding on the component.
             */
            compact: _react2['default'].PropTypes.bool,

            /**
             * Overrides the component with a custom component string ('div') or
             * ReactElement.
             */
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),

            /**
             * Adds the default classes for the component.
             */
            defaultClasses: _react2['default'].PropTypes.bool,

            /**
             * Forces all children to an equal width.
             */
            equal: _react2['default'].PropTypes.bool,

            /**
             * Forces to component to float left or right.
             */
            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),

            /**
             * Overrides default behavior and adds the icon class to the component.
             */
            icon: _react2['default'].PropTypes.bool,

            /**
             * Styles the component for a dark background.
             */
            inverted: _react2['default'].PropTypes.bool,

            /**
             * Overrides default behavior and adds the labeled class to the
             * component.
             */
            labeled: _react2['default'].PropTypes.bool,

            /**
             * Adds a SemanticUI size class.
             */
            size: _react2['default'].PropTypes.string,

            /**
             * Forces child components to render vertically.
             */
            vertical: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'childContextTypes',
        value: {
            isAttached: _react2['default'].PropTypes.bool,
            isIconButtons: _react2['default'].PropTypes.bool,
            isLabeledButtons: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            component: 'div',
            defaultClasses: true
        },
        enumerable: true
    }]);

    var _Buttons = Buttons;
    Buttons = (0, _radium2['default'])(Buttons) || Buttons;
    return Buttons;
})(_react2['default'].Component);

exports['default'] = Buttons;
module.exports = exports['default'];
//# sourceMappingURL=buttons.js.map