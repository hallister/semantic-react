'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left'],
    spaced: ['right', 'left']
};

// can't do SVG since JSX/React breaks on SVG images

var Image = (function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image() {
        _classCallCheck(this, _Image);

        _get(Object.getPrototypeOf(_Image.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Image, [{
        key: 'renderComponent',
        value: function renderComponent(other) {
            var imageDiv = _react2['default'].createElement('img', {
                key: 'image',
                src: this.props.src });

            return _react2['default'].createElement(this.props.component || 'div', other, [this.props.children, imageDiv]);
        }
    }, {
        key: 'renderImg',
        value: function renderImg(other) {
            return _react2['default'].createElement('img', _extends({ src: this.props.src
            }, other));
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var avatar = _props.avatar;
            var bordered = _props.bordered;
            var centered = _props.centered;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var content = _props.content;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var floated = _props.floated;
            var fluid = _props.fluid;
            var shape = _props.shape;
            var size = _props.size;
            var spaced = _props.spaced;
            var src = _props.src;
            var visible = _props.visible;

            var other = _objectWithoutProperties(_props, ['aligned', 'avatar', 'bordered', 'centered', 'children', 'className', 'component', 'content', 'defaultClasses', 'disabled', 'floated', 'fluid', 'shape', 'size', 'spaced', 'src', 'visible']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            // if a custom tag or a child is passed, it will always render
            // a custom tag/div
            return _react2['default'].Children.count(this.props.children) > 0 || this.props.component || this.props.avatar ? this.renderComponent(other) : this.renderImg(other);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                // is there a use-case for an image to be content and still have the ui/image classes?
                ui: this.props.defaultClasses && !this.props.content,

                // types
                content: this.props.content,

                // states
                disabled: this.props.disabled,
                hidden: this.props.visible === 'hidden' || this.props.visible === false,
                visible: this.props.visible === 'visible' || this.props.visible === true,

                // variations
                aligned: this.props.aligned,
                avatar: this.props.avatar,
                bordered: this.props.bordered,
                centered: this.props.centered,
                circular: this.props.shape === 'circular',
                floated: this.props.floated,
                fluid: this.props.fluid,
                rounded: this.props.shape === 'rounded',
                spaced: this.props.spaced,

                // component
                image: this.props.defaultClasses && !this.props.content && this.context.isCommentsChild !== true

            };

            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }], [{
        key: 'propTypes',
        value: {
            aligned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom']),
            avatar: _react2['default'].PropTypes.bool,
            bordered: _react2['default'].PropTypes.bool,
            centered: _react2['default'].PropTypes.bool,
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            content: _react2['default'].PropTypes.bool,
            defaultClasses: _react2['default'].PropTypes.bool,
            disabled: _react2['default'].PropTypes.bool,
            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
            fluid: _react2['default'].PropTypes.bool,
            shape: _react2['default'].PropTypes.oneOf(['circular', 'rounded']),
            size: _react2['default'].PropTypes.string,
            spaced: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['right', 'left']), _react2['default'].PropTypes.bool]),
            src: _react2['default'].PropTypes.string.isRequired,
            visible: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['hidden', 'visible']), _react2['default'].PropTypes.bool])
        },

        // we don't want the ui in these circumstances
        enumerable: true
    }, {
        key: 'contextTypes',
        value: {
            isLabelChild: _react2['default'].PropTypes.bool,
            isCommentsChild: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            defaultClasses: true
        },
        enumerable: true
    }]);

    var _Image = Image;
    Image = (0, _radium2['default'])(Image) || Image;
    return Image;
})(_react2['default'].Component);

exports['default'] = Image;
module.exports = exports['default'];
//# sourceMappingURL=image.js.map