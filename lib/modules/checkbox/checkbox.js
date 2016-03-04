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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Checkbox = (function (_Component) {
    _inherits(Checkbox, _Component);

    _createClass(Checkbox, null, [{
        key: 'propTypes',
        value: {
            checked: _react2['default'].PropTypes.bool,
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            disabled: _react2['default'].PropTypes.bool,
            fitted: _react2['default'].PropTypes.bool,
            indeterminate: _react2['default'].PropTypes.bool,
            name: _react2['default'].PropTypes.string,
            onClick: _react2['default'].PropTypes.func,
            radio: _react2['default'].PropTypes.bool,
            readOnly: _react2['default'].PropTypes.bool,
            slider: _react2['default'].PropTypes.bool,
            toggle: _react2['default'].PropTypes.bool
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

    function Checkbox(props) {
        _classCallCheck(this, _Checkbox);

        _get(Object.getPrototypeOf(_Checkbox.prototype), 'constructor', this).call(this, props);

        this.state = {
            active: this.props.checked
        };
    }

    _createClass(Checkbox, [{
        key: 'onClick',
        value: function onClick() {
            if (!this.state.active || this.state.active && !this.props.radio) {
                this.setState({
                    active: !this.state.active
                });
            }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var defaultClasses = _props.defaultClasses;
            var className = _props.className;
            var onClick = _props.onClick;
            var radio = _props.radio;
            var slider = _props.slider;
            var toggle = _props.toggle;
            var component = _props.component;
            var readOnly = _props.readOnly;
            var checked = _props.checked;
            var disabled = _props.disabled;

            var other = _objectWithoutProperties(_props, ['children', 'defaultClasses', 'className', 'onClick', 'radio', 'slider', 'toggle', 'component', 'readOnly', 'checked', 'disabled']);

            /* eslint-enable no-use-before-define */

            var childElements = [_react2['default'].DOM.input(_extends({
                type: 'checkbox',
                key: 'input',
                className: 'hidden',
                checked: this.state.active || this.props.checked,
                readOnly: true
            }, other)), _react2['default'].DOM.label({
                key: 'label'
            }, this.props.children)];

            return childElements;
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var component = _props2.component;
            var defaultClasses = _props2.defaultClasses;
            var name = _props2.name;

            var other = _objectWithoutProperties(_props2, ['component', 'defaultClasses', 'name']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
            other.onClick = typeof this.props.onClick === 'function' ? this.props.onClick : this.onClick.bind(this);

            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                ui: this.props.defaultClasses,
                checkbox: this.props.defaultClasses,

                // positioning

                // types
                radio: this.props.radio,

                // variations
                fitted: this.props.fitted,
                slider: this.props.slider,
                toggle: this.props.toggle,

                // state
                'read-only': this.props.readOnly,
                checked: this.state.active || this.props.checked,
                disabled: this.props.disabled,
                indeterminate: this.props.indeterminate
            };
        }
    }]);

    var _Checkbox = Checkbox;
    Checkbox = (0, _radium2['default'])(Checkbox) || Checkbox;
    return Checkbox;
})(_react.Component);

exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map