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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _elements = require('../../elements');

var _views = require('../../views');

var _modules = require('../../modules');

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactOnclickoutsideDecorator = require('react-onclickoutside/decorator');

var _reactOnclickoutsideDecorator2 = _interopRequireDefault(_reactOnclickoutsideDecorator);

/**
 * A dropdown component intended to behave exactly as the
 * HTML select component.
 */

var Select = (function (_React$Component) {
    _inherits(Select, _React$Component);

    _createClass(Select, null, [{
        key: 'propTypes',
        value: {
            active: _react2['default'].PropTypes.bool,
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            defaultClasses: _react2['default'].PropTypes.bool,
            enterAnimation: _react2['default'].PropTypes.object,
            fluid: _react2['default'].PropTypes.bool,
            glyphWidth: _react2['default'].PropTypes.number,
            ignoreCase: _react2['default'].PropTypes.bool,
            leaveAnimation: _react2['default'].PropTypes.object,
            multiple: _react2['default'].PropTypes.bool,
            name: _react2['default'].PropTypes.string,
            noResults: _react2['default'].PropTypes.string,
            placeholder: _react2['default'].PropTypes.string,
            search: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            ignoreCase: true,
            defaultClasses: true,
            glyphWidth: 1.0714,
            noResults: 'No results found...',
            enterAnimation: {
                height: 'auto'
            },
            leaveAnimation: {
                height: 0
            }
        },
        enumerable: true
    }]);

    function Select(props) {
        _classCallCheck(this, Select);

        _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).call(this, props);

        // we don't want this modifying state
        this.validOptions = {};

        this.state = {
            active: false,
            error: false,
            selected: props.multiple ? [] : null,
            visible: false
        };
    }

    // Need this trick for react-docgen

    _createClass(Select, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this = this;

            // adds all child values to the validOptions array
            _react2['default'].Children.forEach(this.props.children, function (child) {
                _this.validOptions[child.props.children] = child.props.value;
            });
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(props, state) {
            // prevents duplicate states from rerendering. happens frequently with
            // this many onclick handlers, and the only expected prop change that
            // would warrant a re-render is the child length
            if (this.state === state) {
                // children remain the same.
                if (props.children.length === this.props.children.length) {
                    return false;
                } else {
                    return true;
                }
            }

            return true;
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            // clicking the arrow/search box or dropdown area
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();

            this.setFocus();

            if (!this.state.active) {
                this.setState({
                    active: true,
                    visible: true
                });
            }
        }
    }, {
        key: 'onCloseOption',
        value: function onCloseOption(name, e) {
            // pressing the x on a multiple select
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();

            var selected = this.getSelected(name);

            if (this.refs.search) {
                this.refs.search.value = '';
            }

            this.setState({
                selected: selected
            });
        }
    }, {
        key: 'onLabelClick',
        value: function onLabelClick(name, e) {
            // clicking the label of a multiple select
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }
    }, {
        key: 'onOptionClick',
        value: function onOptionClick(name, e) {
            // click an option
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();

            var selected = this.getSelected(name);

            if (this.refs.search) {
                this.refs.search.value = '';
            }

            // if it's multiple, don't close it just set the state and refocus the element
            if (this.props.multiple) {
                this.setState({
                    selected: selected
                });

                this.setFocus();
            } else {
                this.setState({
                    active: false,
                    selected: selected
                });
            }
        }
    }, {
        key: 'onSearchKeyDown',
        value: function onSearchKeyDown(e) {
            // pressing the enter key when a multiple select
            if (e.which === 13 && this.props.multiple) {
                var match = this.isMatch();

                // target matches a valid select
                if (match) {
                    if (this.props.multiple) {
                        this.refs.search.value = '';
                    }

                    this.setState({
                        error: false,
                        selected: this.getSelected(match)
                    });
                } else {
                    // not match, error
                    this.setState({
                        error: true
                    });
                }

                // pressing delete when there is an empty search box using a multiple select
            } else if (e.which === 8 && this.refs.search.value == '' && this.props.multiple) {
                    var selected = this.popSelected();

                    if (selected) {
                        this.setState({
                            selected: selected
                        });
                    }
                }
        }
    }, {
        key: 'onSearchChange',
        value: function onSearchChange() {
            // anytime we modify the text box, remove the error
            this.setState({
                error: false
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var search = this.refs.search ? this.refs.search.value : null;
            var flags = this.props.ignoreCase ? 'gi' : 'g';
            var newChildren = [];

            // we can't map children because we need to know when length is zero
            _react2['default'].Children.forEach(this.props.children, function (child) {
                if (child.type === _modules.Option) {
                    var match = true;
                    var selected = false;

                    // search box handling
                    if (search) {
                        var regex = new RegExp(search, flags);

                        if (!regex.test(child.props.children)) {
                            match = false;
                        }
                    }

                    // check if this child is in the selection array
                    if (_this2.props.multiple) {
                        // is this value in the selected array of a multiple select
                        if (_this2.state.selected.indexOf(child.props.children) > -1) {
                            selected = true;
                        }
                    }

                    if (match && !selected) {
                        newChildren.push(_react2['default'].cloneElement(child, {
                            key: child.props.children,
                            active: _this2.state.selected == child.props.children && !_this2.props.search,
                            onClick: _this2.onOptionClick.bind(_this2, child.props.children)
                        }, child.props.children));
                    }
                }
            });

            return newChildren;
        }
    }, {
        key: 'renderLabels',
        value: function renderLabels() {
            var _this3 = this;

            // can't animate while ReactTransitionGroup
            if (this.props.multiple) {
                return this.state.selected.map(function (label) {
                    /*                return (
                                        <Label
                                            component="a"
                                            key={label}
                                            onClick={this.onLabelClick.bind(this, label)}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {label}
                                            <Icon
                                                name="close"
                                                onClick={this.onCloseOption.bind(this, label)}/>
                                        </Label>
                                    );*/
                    return _react2['default'].createElement(
                        _reactMotionUiPack2['default'],
                        {
                            component: false,
                            enter: { scale: 1, opacity: 1 },
                            leave: { scale: 0, opacity: 0 },
                            style: { display: 'inline-block' }
                        },
                        _react2['default'].createElement(
                            _elements.Label,
                            {
                                component: 'a',
                                key: label,
                                onClick: _this3.onLabelClick.bind(_this3, label),
                                style: { display: 'inline-block' }
                            },
                            label,
                            _react2['default'].createElement(_elements.Icon, {
                                name: 'close',
                                onClick: _this3.onCloseOption.bind(_this3, label) })
                        )
                    );
                });
            }
        }
    }, {
        key: 'renderSearch',
        value: function renderSearch() {
            var style = {};

            // expand the width of the search box as you type. no max?
            var width = this.refs.search ? this.refs.search.value.length * this.props.glyphWidth : null;

            if (width) {
                style.width = width + 'em';
            }

            return this.props.search ? _react2['default'].createElement('input', {
                className: 'search',
                onChange: this.onSearchChange.bind(this),
                onKeyDown: this.onSearchKeyDown.bind(this),
                ref: 'search',
                style: style,
                tabIndex: '0' }) : false;
        }
    }, {
        key: 'renderText',
        value: function renderText() {
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(this.getTextClasses()) },
                this.state.selected && !this.props.multiple ? this.state.selected : this.props.placeholder
            );
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var active = _props.active;
            var multiple = _props.multiple;
            var search = _props.search;
            var ignoreCase = _props.ignoreCase;
            var name = _props.name;
            var placeholder = _props.placeholder;
            var glyphWidth = _props.glyphWidth;
            var defaultClasses = _props.defaultClasses;
            var noResults = _props.noResults;

            var other = _objectWithoutProperties(_props, ['active', 'multiple', 'search', 'ignoreCase', 'name', 'placeholder', 'glyphWidth', 'defaultClasses', 'noResults']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
            other.onClick = this.onClick.bind(this);

            var children = this.renderChildren();

            if (_react2['default'].Children.count(children) == 0) {
                children = _react2['default'].createElement(
                    'div',
                    {
                        className: 'message'
                    },
                    this.props.noResults
                );
            }

            return _react2['default'].createElement(
                _modules.Dropdown,
                _extends({}, other, {
                    active: this.state.active,
                    visible: this.state.visible
                }),
                _react2['default'].createElement('input', {
                    name: this.props.name,
                    type: 'hidden',
                    value: this.formatValue() }),
                _react2['default'].createElement(_elements.Icon, {
                    name: 'dropdown' }),
                this.renderLabels(),
                this.renderSearch(),
                this.renderText(),
                _react2['default'].createElement(
                    _reactMotionUiPack2['default'],
                    {
                        component: false,
                        enter: this.props.enterAnimation,
                        leave: this.props.leaveAnimation
                    },
                    this.state.active && _react2['default'].createElement(
                        _views.Menu,
                        { key: 'menu',
                            style: { overflow: 'hidden' }
                        },
                        children
                    )
                )
            );
        }
    }, {
        key: 'handleClickOutside',
        value: function handleClickOutside() {
            // this should be doing the same thing as the enter key before it closes

            var match = this.isMatch();

            // the text box itself is a match
            if (match) {
                if (this.props.multiple) {
                    this.refs.search.value = '';
                }

                this.setState({
                    active: false,
                    error: false,
                    selected: this.getSelected(match)
                });
                // if the search value is non-empty and the state is active but there's no valid selection, it's an error
            } else if (this.refs.search && this.refs.search.value && this.state.active && !this.state.error && this.state.selected.length == 0) {
                    this.setState({
                        error: true
                    });
                    // if the state is active and there is no error we can close it
                } else if (this.state.active && !this.state.error) {
                        this.setState({
                            active: false
                        });
                    }
        }

        // value formating for the hidden input box
    }, {
        key: 'formatValue',
        value: function formatValue() {
            var _this4 = this;

            if (this.props.multiple) {
                var _ret = (function () {
                    var selected = [];

                    // maybe just string and slice it instead of allocating an array
                    _this4.state.selected.forEach(function (item) {
                        selected.push(_this4.validOptions[item]);
                    });

                    return {
                        v: selected.join(', ')
                    };
                })();

                if (typeof _ret === 'object') return _ret.v;
            } else {
                return this.validOptions[this.state.selected];
            }
        }
    }, {
        key: 'getTextClasses',
        value: function getTextClasses() {
            return {
                'default': !this.state.selected || this.props.multiple,
                filtered: this.refs.search && this.refs.search.value.length > 0,
                text: true
            };
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                active: this.props.active,
                // positioning

                // types
                selection: true,
                search: this.props.search,
                fluid: this.props.fluid,

                // state
                error: this.state.error,

                // component
                multiple: this.props.multiple

                // variations
            };
        }
    }, {
        key: 'getSelected',
        value: function getSelected(name) {
            var clone = name;

            if (this.props.multiple) {
                var index = this.state.selected.indexOf(name);
                clone = this.state.selected.slice(0);

                if (index > -1) {
                    clone.splice(index, 1);
                } else {
                    clone.push(name);
                }
            }

            return clone;
        }
    }, {
        key: 'isMatch',
        value: function isMatch() {
            var match = false;
            if (this.refs.search) {
                var _target = this.props.ignoreCase ? this.refs.search.value.toLowerCase() : this.refs.search.value;

                for (var _name in this.validOptions) {
                    var text = this.props.ignoreCase ? _name.toLowerCase() : _name;

                    if (text == _target) {
                        match = _name;
                        break;
                    }
                }
            }

            return match;
        }
    }, {
        key: 'popSelected',
        value: function popSelected() {
            var clone = this.state.selected.splice(0);

            if (clone.length == 0 || !this.props.multiple) {
                return false;
            } else {
                clone.pop();
                return clone;
            }
        }
    }, {
        key: 'setFocus',
        value: function setFocus() {
            if (this.props.search) {
                _reactDom2['default'].findDOMNode(this.refs.search).focus();
            }
        }
    }]);

    return Select;
})(_react2['default'].Component);

exports.Select = Select = (0, _reactOnclickoutsideDecorator2['default'])(Select);
exports.Select = Select;
//# sourceMappingURL=select.js.map