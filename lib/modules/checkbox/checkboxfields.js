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

var _modules = require('../../modules');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var CheckboxFields = (function (_Component) {
    _inherits(CheckboxFields, _Component);

    _createClass(CheckboxFields, null, [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.node]),
            className: _react2['default'].PropTypes.node,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            disabled: _react2['default'].PropTypes.bool,
            name: _react2['default'].PropTypes.string.isRequired,
            onClick: _react2['default'].PropTypes.func,
            radio: _react2['default'].PropTypes.bool,
            readOnly: _react2['default'].PropTypes.bool,
            type: _react2['default'].PropTypes.oneOf(['grouped', 'inline']).isRequired
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

    function CheckboxFields(props) {
        _classCallCheck(this, _CheckboxFields);

        _get(Object.getPrototypeOf(_CheckboxFields.prototype), 'constructor', this).call(this, props);

        var active = this.props.radio ? -1 : [];

        this.state = {
            active: active
        };
    }

    _createClass(CheckboxFields, [{
        key: 'onClick',
        value: function onClick(key) {
            // don't remove radio buttons if you click them twice
            if (key === this.state.active && this.props.radio) {
                return;
                // but do remove for everything else
            } else {
                    this.setActive(key);
                }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this = this;

            var index = 0;
            var element = null;

            if (_react2['default'].Children.count(this.props.children) === 1) {
                return this.cloneChild(index, _react2['default'].Children.only(this.props.children));
            } else {
                return _react2['default'].Children.map(this.props.children, function (child) {
                    if (child.type == _modules.Checkbox) {
                        element = _this.cloneChild(index, child);

                        element = _react2['default'].DOM.div({
                            key: index,
                            className: 'field'
                        }, element);

                        index++;
                    } else if (typeof child === 'string') {
                        return _react2['default'].createElement(
                            'label',
                            { htmlFor: _this.props.name },
                            child
                        );
                    } else {
                        element = child;
                    }

                    return element;
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var name = _props.name;

            var other = _objectWithoutProperties(_props, ['component', 'defaultClasses', 'name']);

            /* eslint-enable no-use-before-define */
            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
        }

        // clone a chid and update the props
    }, {
        key: 'cloneChild',
        value: function cloneChild(index, child) {
            var boundClick = this.onClick.bind(this, index);

            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var children = _props2.children;
            var component = _props2.component;
            var defaultClasses = _props2.defaultClasses;
            var onClick = _props2.onClick;
            var type = _props2.type;

            var other = _objectWithoutProperties(_props2, ['children', 'component', 'defaultClasses', 'onClick', 'type']);

            /* eslint-enable no-use-before-define */

            return _react2['default'].cloneElement(child, _extends({
                key: index,
                checked: this.getActive(index),
                onClick: boundClick,
                radio: this.props.radio,
                readOnly: this.props.readOnly || this.props.disabled
            }, other));
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default

                // positioning

                // types

                // component

                // variations
                fields: _react2['default'].Children.count(this.props.children) > 1
            };

            classes[this.props.type] = !!this.props.type;

            return classes;
        }
    }, {
        key: 'getActive',
        value: function getActive(index) {
            var state = this.state.active;
            var active = false;

            if (Array.isArray(state)) {
                active = state.indexOf(index) > -1 ? true : false;
            } else {
                active = state == index ? true : false;
            }

            return active;
        }
    }, {
        key: 'setActive',
        value: function setActive(index) {
            if (this.props.readOnly || this.props.disabled) return;

            var state = this.state.active;

            // should only be an array if it's checkbox, not radio
            // IE 9+ for indexOf
            if (Array.isArray(state)) {
                var position = state.indexOf(index);

                if (position > -1) {
                    state.splice(position, 1);
                } else {
                    state.push(index);
                }

                // it's a radio
            } else {
                    state = index;
                }

            this.setState({
                active: state
            });
        }
    }]);

    var _CheckboxFields = CheckboxFields;
    CheckboxFields = (0, _radium2['default'])(CheckboxFields) || CheckboxFields;
    return CheckboxFields;
})(_react.Component);

exports.CheckboxFields = CheckboxFields;
//# sourceMappingURL=checkboxfields.js.map