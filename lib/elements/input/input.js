'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_temp = _class = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'renderText',
        value: function renderText() {
            // see if icon and label are children
            this.processChildren();

            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var defaultClasses = _props.defaultClasses;
            var icon = _props.icon;
            var labeled = _props.labeled;
            var loading = _props.loading;
            var name = _props.name;
            var placeholder = _props.placeholder;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'defaultClasses', 'icon', 'labeled', 'loading', 'name', 'placeholder']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getLabelClasses(), this.getIconClasses(), this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.prepareInput());
        }

        // potential for types other than text

    }, {
        key: 'render',
        value: function render() {
            return this.renderText();
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // types
                input: this.props.defaultClasses,

                // states
                disabled: this.props.state === 'disabled',
                error: this.props.state === 'error',
                focus: this.props.focus,
                loading: this.props.loading,

                // variations
                action: this.props.action,
                fluid: this.props.fluid,
                inverted: this.props.inverted,
                size: this.props.size,
                transparent: this.props.transparent
            };

            classes[this.props.size] = !!this.props.size;

            return classes;
        }

        // sets iconClass if Icon is a child

    }, {
        key: 'getIconClasses',
        value: function getIconClasses() {
            var classes = {
                right: false,
                left: false,
                icon: false
            };

            // if icon exists, set the appropriate css classes
            if (this.children.icon) {
                classes.right = this.children.icon.props.right || false;
                classes.left = this.children.icon.props.left || false;
                classes.icon = true;
            }

            return classes;
        }

        // sets labelClass if label is a child

    }, {
        key: 'getLabelClasses',
        value: function getLabelClasses() {
            var classes = {
                right: false,
                left: false,
                corner: false,
                labeled: false
            };

            // if label exists, set the appropriate css classes
            if (this.children.label) {
                classes.right = this.children.label.props.right || false;
                classes.corner = this.children.label.props.corner || false;
                classes.left = this.children.label.props.left || classes.corner == 'left' || false;
                classes.labeled = true;
            }

            return classes;
        }

        // ensures that the label is on the correct side of the input

    }, {
        key: 'prepareInput',
        value: function prepareInput() {
            var labelClasses = this.getLabelClasses();
            var input = [];

            // the actual input element
            var inputHTML = _react2.default.createElement('input', {
                key: 'input',
                placeholder: this.props.placeholder });

            if (labelClasses.corner) {
                input.push(inputHTML);
                input.push(this.props.children);
            } else {
                input.push(this.children.icon);

                // if label is on the right, put the input on the left
                if (labelClasses.right) {
                    input.push(inputHTML);
                    input.push(this.children.label);
                } else {
                    input.push(this.children.label);
                    input.push(inputHTML);
                }
            }

            return input;
        }

        // checks if Icon and Label are children of this Input
        // we don't use hasComponent because we need to know if two exist
        // don't need this for anything else yet, so will leave for now

    }, {
        key: 'processChildren',
        value: function processChildren() {
            var children = {
                icon: null,
                label: null
            };

            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type === _elements.Icon && typeof child.type !== 'undefined') {
                    children.icon = child;
                } else if (child.type === _elements.Label && typeof child.type !== 'undefined') {
                    children.label = child;
                }
            });

            this.children = children;
        }
    }]);

    return Input;
}(_react2.default.Component), _class.propTypes = {
    action: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    fluid: _react2.default.PropTypes.bool,
    focus: _react2.default.PropTypes.bool,
    icon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
    inverted: _react2.default.PropTypes.bool,
    labeled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
    loading: _react2.default.PropTypes.bool,
    name: _react2.default.PropTypes.string,
    placeholder: _react2.default.PropTypes.string,
    size: _react2.default.PropTypes.string,
    state: _react2.default.PropTypes.oneOf(['disabled', 'error']),
    transparent: _react2.default.PropTypes.bool
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true,
    loading: false,
    placeholder: 'Search...'
}, _temp);
exports.default = Input;
//# sourceMappingURL=input.js.map