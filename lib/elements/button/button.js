'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
        animated: ['vertical', 'fade'],
        attached: ['left', 'right', 'bottom', 'top'],
        labeled: ['right', 'left'],
        floated: ['right', 'left']
};

var Button = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
        _inherits(Button, _React$Component);

        function Button() {
                _classCallCheck(this, Button);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
        }

        _createClass(Button, [{
                key: 'render',
                value: function render() {
                        var Component = this.props.attached || this.context.isAttached || this.props.animated || _react2.default.Children.count(this.props.children) > 1 ? 'div' : 'button';

                        // consume props
                        /* eslint-disable no-use-before-define */
                        var _props = this.props;
                        var animated = _props.animated;
                        var attached = _props.attached;
                        var basic = _props.basic;
                        var children = _props.children;
                        var circular = _props.circular;
                        var color = _props.color;
                        var component = _props.component;
                        var compact = _props.compact;
                        var className = _props.className;
                        var defaultClasses = _props.defaultClasses;
                        var floated = _props.floated;
                        var fluid = _props.fluid;
                        var icon = _props.icon;
                        var inverted = _props.inverted;
                        var labeled = _props.labeled;
                        var loading = _props.loading;
                        var size = _props.size;
                        var social = _props.social;
                        var state = _props.state;

                        var other = _objectWithoutProperties(_props, ['animated', 'attached', 'basic', 'children', 'circular', 'color', 'component', 'compact', 'className', 'defaultClasses', 'floated', 'fluid', 'icon', 'inverted', 'labeled', 'loading', 'size', 'social', 'state']);
                        /* eslint-enable no-use-before-define */

                        // add class names


                        other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

                        return _react2.default.createElement(this.props.component || Component, other, this.props.children);
                }
        }, {
                key: 'isIconButton',
                value: function isIconButton() {
                        return (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react2.default.Children.count(this.props.children) === 1;
                }
        }, {
                key: 'getClasses',
                value: function getClasses() {
                        var classes = {
                                // default
                                ui: this.props.defaultClasses,

                                // position based props
                                floated: this.props.floated,
                                labeled: this.props.labeled && !this.context.isLabeledButtons,
                                attached: this.props.attached,

                                // types
                                animated: this.props.animated,
                                basic: this.props.basic,
                                icon: (this.props.icon || this.isIconButton()) && !this.context.isIconButtons,
                                inverted: this.props.inverted,

                                // states
                                active: this.props.state === 'active',
                                disabled: this.props.state === 'disabled',
                                loading: this.props.loading,

                                // variations
                                circular: this.props.circular,
                                compact: this.props.compact,
                                fluid: this.props.fluid,

                                // component
                                button: this.props.defaultClasses
                        };

                        // string types
                        classes[this.props.color] = !!this.props.color;
                        classes[this.props.size] = !!this.props.size;
                        classes[this.props.social] = !!this.props.social;

                        return (0, _utilities.validateClassProps)(classes, this.props, validProps);
                }
        }]);

        return Button;
}(_react2.default.Component), _class2.propTypes = {
        /**
         * Adds a fade or slide animation on hover.
         */
        animated: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['fade', 'vertical']), _react2.default.PropTypes.bool]),

        /**
         * It's attached to some other attachable component.
         */
        attached: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['left', 'right', 'bottom', 'top']), _react2.default.PropTypes.bool]),

        /**
         * Adds simple styling to the component.
         */
        basic: _react2.default.PropTypes.bool,

        /**
         * The child nodes of the component.
         */
        children: _react2.default.PropTypes.node,

        /**
         * Gives a circular shape to the component.
         */
        circular: _react2.default.PropTypes.bool,

        /**
         * Adds additional classes to the component.
         */
        className: _react2.default.PropTypes.node,

        /**
         * Adds a SemanticUI color class.
         */
        color: _react2.default.PropTypes.string,

        /**
         * Reduces the padding on the component.
         */
        compact: _react2.default.PropTypes.bool,

        /**
         * Overrides the component with a custom component string ('div') or ReactElement.
         */
        component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),

        /**
         * Adds the default classes for the component.
         */
        defaultClasses: _react2.default.PropTypes.bool,

        /**
         * Forces to component to float left or right.
         */
        floated: _react2.default.PropTypes.oneOf(['right', 'left']),

        /**
         * The component fills the parent components horizontal space.
         */
        fluid: _react2.default.PropTypes.bool,

        /**
         * Overrides default behavior and adds the icon class to the component.
         */
        icon: _react2.default.PropTypes.bool,

        /**
         * Styles the component for a dark background.
         */
        inverted: _react2.default.PropTypes.bool,

        /**
         * Defines whether the label is to the right or left of the component (LabeledButton).
         */
        labeled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['right', 'left']), _react2.default.PropTypes.bool]),

        /**
         * Displays a loading indicator on the component.
         */
        loading: _react2.default.PropTypes.bool,

        /**
         * Adds a SemanticUI size class.
         */
        size: _react2.default.PropTypes.string,

        /**
         * Adds a SemanticUI social class (SocialButton).
         */
        social: _react2.default.PropTypes.string,

        /**
         * Indicates whether the button is currently highlighted or disabled.
         */
        state: _react2.default.PropTypes.oneOf(['active', 'disabled'])
}, _class2.contextTypes = {
        isAttached: _react2.default.PropTypes.bool,
        isIconButtons: _react2.default.PropTypes.bool,
        isLabeledButtons: _react2.default.PropTypes.bool
}, _class2.defaultProps = {
        defaultClasses: true
}, _temp)) || _class;

exports.default = Button;
//# sourceMappingURL=button.js.map