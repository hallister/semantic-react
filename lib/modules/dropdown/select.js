'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _dropdownelement = require('./dropdownelement');

var _dropdownelement2 = _interopRequireDefault(_dropdownelement);

var _elements = require('../../elements');

var _views = require('../../views');

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Select is the dropdown where options could be selected, either single or multiple.
 * Also supports search
 */
var Select = (_temp = _class = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        /**
         * Menu reference
         */

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

        _this.onDropdownClick = function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (!_this.state.active) {
                _this.setState({
                    active: true
                });
                // we don't want to close dropdown for multiple or search with dropdown search position dropdowns
            } else if (!_this.props.multiple && !(_this.props.search && _this.props.searchPosition === 'dropdown')) {
                    _this.setState({
                        active: false
                    });
                }
        };

        _this.onOutsideDropdownClick = function (event) {
            if (!_this.state.active) {
                return;
            }
            var menuElement = _reactDom2.default.findDOMNode(_this);
            if (menuElement) {
                if (!(0, _utilities.isNodeInRoot)(event.target, menuElement)) {
                    // need to reset value manually
                    if (_this.searchRef && !_this.props.multiple) {
                        _this.searchRef.value = '';
                    }
                    _this.setState({
                        active: false,
                        // clean search string for single selections too
                        searchString: _this.props.multiple ? _this.state.searchString : ''
                    });
                }
            }
        };

        _this.onMenuItemClick = function (value) {
            if (_this.state.selected.indexOf(value) === -1) {
                var newState = {};
                if (_this.props.multiple) {
                    // Append value for multiple
                    newState = {
                        selected: [].concat(_toConsumableArray(_this.state.selected), [value])
                    };
                } else {
                    // replace for single
                    newState = {
                        selected: [value]
                    };
                }

                // Intelligently handle multiple select here:
                // Do not close if selecting and there are more than 1 element left in menu
                // Set focus to search box if searchable
                // Close if menu has only 1 element
                if (_this.props.multiple && _this.menuRef) {
                    var optionsCount = _react2.default.Children.count(_this.menuRef.props.children);
                    if (optionsCount <= 1) {
                        // Can close menu here
                        newState.active = false;
                        // also clean search string here
                        newState.searchString = '';
                        if (_this.searchRef) {
                            _this.searchRef.value = '';
                        }
                    } else {
                        // we have few more elements here, put focus if searchable
                        /* eslint-disable no-lonely-if */
                        if (_this.props.search && _this.searchRef) {
                            _this.searchRef.focus();
                        }
                        /* eslint-enable no-lonely-if */
                    }
                } else {
                        // Non multiple select or ref is not available?
                        newState.active = false;
                        // always clean searchstring for single selection dropdowns
                        newState.searchString = '';
                        if (_this.searchRef) {
                            _this.searchRef.value = '';
                        }
                    }
                _this.setState(newState);
                _this.props.onSelectChange(newState.selected);
            }
        };

        _this.onSearchInputChange = function () {};

        _this.onSearchInputKeyUp = function (event) {
            switch (event.which) {
                // Enter
                case 13:
                    // only do something if we have search results available and not displaying not results message
                    if (_this.menuRef && !_this.noResultsMessageRef && _react2.default.Children.count(_this.menuRef.props.children) > 0) {
                        // get the first children
                        var child = _react2.default.Children.toArray(_this.menuRef.props.children)[0];
                        if (child && child.props.value) {
                            // enter should do the same as menu item click
                            _this.onMenuItemClick(child.props.value);
                            // but clean search box additionally
                            if (_this.searchRef) {
                                _this.searchRef.value = '';
                            }
                            _this.setState({
                                searchString: ''
                            });
                        }
                    }
                    break;
                // Backspace
                case 8:
                    if (_this.state.searchString === '') {
                        if (_this.props.multiple && _this.state.selected.length > 0) {
                            _this.setState({
                                selected: [].concat(_toConsumableArray(_this.state.selected.slice(0, -1)))
                            });
                        }
                    } else if (_this.searchRef) {
                        _this.setState({
                            searchString: _this.searchRef.value
                        });
                    }
                    break;
                default:
                    if (_this.searchRef) {
                        _this.setState({
                            searchString: _this.searchRef.value
                        });
                    }
            }
        };

        _this.menuRef = null;
        _this.searchRef = null;
        _this.noResultsMessageRef = null;

        _this.state = {
            active: props.active,
            selected: [],
            searchString: ''
        };
        return _this;
    }

    _createClass(Select, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.search && this.searchRef && this.state.active) {
                this.searchRef.focus();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.active && this.state.active !== nextProps.active) {
                this.setState({
                    active: nextProps.active
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.search && this.searchRef && this.state.active) {
                this.searchRef.focus();
            }
        }

        /**
         * Handler for clicking on dropdown
         */


        /**
         * Handler for outside click
         */


        /**
         * Handler for menu item click
         * @param value
         */

    }, {
        key: 'onLabelCloseIconClick',


        /**
         * Handler for close label click
         * @param value
         */
        value: function onLabelCloseIconClick(value) {
            var index = this.state.selected.indexOf(value);
            if (index !== -1) {
                this.setState({
                    selected: [].concat(_toConsumableArray(this.state.selected.filter(function (val) {
                        return val !== value;
                    })))
                });
            }
        }

        /**
         * Handler for search input change
         */


        /**
         * Handler for search input key events
         * @param {React.KeyboardEvent} event
         */

    }, {
        key: 'renderDropdownInput',


        /**
         * Renders dropdown hidden input 
         */
        value: function renderDropdownInput() {
            var name = this.props.name;

            var value = this.state.selected.join(',');
            return _react2.default.createElement('input', { name: name,
                type: 'hidden',
                value: value });
        }

        /**
         * Renders dropdown labels for multiple type dropdowns
         */

    }, {
        key: 'renderDropdownLabels',
        value: function renderDropdownLabels() {
            var _this2 = this;

            // Selection labels should appear only for multiple dropdowns
            if (!this.props.multiple) {
                return null;
            }

            return _react2.default.Children.map(this.props.children, function (child) {
                // Process only option or option like childs and if it's selected
                if (child.props.value && _this2.state.selected.indexOf(child.props.value) !== -1) {
                    return _react2.default.createElement(
                        _reactMotionUiPack2.default,
                        { component: false,
                            enter: { scale: 1 },
                            leave: { scale: 0 }
                        },
                        _react2.default.createElement(
                            _elements.Label,
                            { component: 'a',
                                key: 'label-' + child.props.value,
                                style: { display: 'inline-block' }
                            },
                            child.props.children,
                            _react2.default.createElement(_elements.Icon, { name: 'close',
                                onClick: _this2.onLabelCloseIconClick.bind(_this2, child.props.value) })
                        )
                    );
                }
            });
        }

        /**
         * Render dropdown placeholder text
         */

    }, {
        key: 'renderDropdownText',
        value: function renderDropdownText() {
            var _this3 = this;

            var _props = this.props;
            var placeholder = _props.placeholder;
            var search = _props.search;
            var searchPosition = _props.searchPosition;
            var selection = _props.selection;
            // Render placeholder if not selected

            if (this.state.selected.length === 0) {
                if (typeof placeholder !== 'undefined') {
                    // Selection type should use default text, non selection text
                    return _react2.default.createElement(
                        'div',
                        { className: this.props.selection ? 'default text' : 'text' },
                        placeholder
                    );
                } else {
                    return null;
                }
            } else {
                // Need to render children content in text here if not multiple otherwise render placeholder anyway
                /* eslint-disable no-lonely-if */
                if (this.props.multiple) {
                    return _react2.default.createElement(
                        'div',
                        { className: this.props.selection ? 'default text' : 'text' },
                        placeholder
                    );
                } else {
                    var content = _react2.default.createElement('div', { className: 'text filtered' });
                    if (!search || this.state.searchString === '') {
                        // traverse in childs, find necessary node
                        _react2.default.Children.forEach(this.props.children, function (child) {
                            if (child.props.value && _this3.state.selected.indexOf(child.props.value) !== -1) {
                                content = _react2.default.createElement(
                                    'div',
                                    { className: 'text' },
                                    child.props.children
                                );
                            }
                        });
                    }
                    return content;
                }
                /* eslint-enable no-lonely-if */
            }
        }

        /**
         * Renders dropdown icon
         */

    }, {
        key: 'renderDropdownIcon',
        value: function renderDropdownIcon() {
            var icon = this.props.icon;

            return _react2.default.createElement(_elements.Icon, { name: icon });
        }

        /**
         * Renders search input
         */

    }, {
        key: 'renderSearchInput',
        value: function renderSearchInput() {
            var _this4 = this;

            // Do not render if not searchable
            if (!this.props.search) {
                return null;
            }

            var searchWidth = this.props.searchGlyphWidth * this.state.searchString.length;
            // single selection dropdown shouldn't apply width style
            var style = searchWidth && this.props.searchPosition === 'dropdown' && this.props.multiple ? { width: searchWidth + 'em' } : {};
            if (this.props.searchPosition === 'dropdown') {
                return _react2.default.createElement('input', { autoComplete: 'off',
                    className: 'search',
                    key: 'searchInput',
                    onKeyUp: (0, _lodash2.default)(this.onSearchInputKeyUp, 150),
                    ref: function ref(_ref) {
                        return _this4.searchRef = _ref;
                    },
                    style: style,
                    tabIndex: 0 });
            } else {
                // Search in menu has slightly different layout
                return _react2.default.createElement(
                    'div',
                    { className: 'ui icon search input' },
                    _react2.default.createElement(_elements.Icon, { name: 'search' }),
                    _react2.default.createElement('input', { placeholder: 'Search...',
                        onKeyUp: (0, _lodash2.default)(this.onSearchInputKeyUp, 150),
                        ref: function ref(_ref2) {
                            return _this4.searchRef = _ref2;
                        },
                        tabIndex: 0,
                        type: 'text' })
                );
            }
        }

        /**
         * Renders search header if specified
         */

    }, {
        key: 'renderSearchHeader',
        value: function renderSearchHeader() {
            var _props2 = this.props;
            var search = _props2.search;
            var searchHeader = _props2.searchHeader;

            if (search && searchHeader) {
                return _react2.default.createElement(
                    _elements.Header,
                    { key: 'searchHeader' },
                    searchHeader
                );
            } else {
                return null;
            }
        }

        /**
         * Filters children options to exclude selected elements or elements which doesn't match to search
         */

    }, {
        key: 'renderFilteredChildren',
        value: function renderFilteredChildren() {
            var selected = this.state.selected;
            var _props3 = this.props;
            var search = _props3.search;
            var searchIgnoreCase = _props3.searchIgnoreCase;
            var multiple = _props3.multiple;

            var searchString = this.state.searchString;
            var searchRegex = new RegExp(searchString, searchIgnoreCase ? 'gi' : 'g');

            var newChildren = [];
            _react2.default.Children.forEach(this.props.children, function (child) {
                // only process option like childs
                if (child.props.value) {
                    var match = true;
                    if (search && searchString !== '') {
                        // value could be int or string. In case of int convert it to string
                        var value = typeof child.props.value === 'number' ? Number.parseInt(child.props.value) : child.props.value;
                        match = searchRegex.test(value) || searchRegex.test(child.props.children);
                    }

                    // Match for non search selection will be always true
                    if (match) {
                        // For multiple type render only non selected options
                        if (multiple && selected.indexOf(child.props.value) === -1) {
                            newChildren.push(_react2.default.cloneElement(child, {
                                key: child.key ? child.key : child.props.value,
                                // need to pass menu value, otherwise menu will not bind handler
                                menuValue: child.props.value
                            }));
                        } else if (!multiple) {
                            // for single selection render all options but add selected value
                            newChildren.push(_react2.default.cloneElement(child, {
                                active: selected.indexOf(child.props.value) !== -1,
                                key: child.key ? child.key : child.props.value,
                                // need to pass menu value, otherwise menu will not bind handler
                                menuValue: child.props.value
                            }));
                        }
                    }
                } else if (searchString === '') {
                    // need to pass non option like childs, but only if search string is empty
                    newChildren.push(_react2.default.cloneElement(child, {
                        key: child.key ? child.key : child.props.value
                    }));
                }
            });
            return newChildren;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props4 = this.props;
            var children = _props4.children;
            var enterAnimation = _props4.enterAnimation;
            var leaveAnimation = _props4.leaveAnimation;
            var icon = _props4.icon;
            var name = _props4.name;
            var search = _props4.search;
            var searchPosition = _props4.searchPosition;
            var searchHeader = _props4.searchHeader;
            var searchNoResultsMessage = _props4.searchNoResultsMessage;

            var other = _objectWithoutProperties(_props4, ['children', 'enterAnimation', 'leaveAnimation', 'icon', 'name', 'search', 'searchPosition', 'searchHeader', 'searchNoResultsMessage']);

            // make new array for menu childrens


            var menuChildrens = [];
            // render search and header in menu
            if (search && searchPosition === 'menu') {
                if (searchHeader) {
                    menuChildrens.push(this.renderSearchHeader());
                }
                menuChildrens.push(this.renderSearchInput());
            }

            var filteredChilds = this.renderFilteredChildren();
            // Display no results message instead of children if needed
            if ((!filteredChilds || filteredChilds.length === 0) && search && this.state.searchString != '') {
                filteredChilds = [_react2.default.createElement(
                    'div',
                    { className: 'message',
                        key: 'noResultsMessage',
                        ref: function ref(_ref3) {
                            return _this5.noResultsMessageRef = _ref3;
                        }
                    },
                    searchNoResultsMessage
                )]; // eslint-disable-line
            }

            menuChildrens = menuChildrens.concat(filteredChilds);

            other.className = (0, _classnames2.default)(other.className, this.getClasses());

            return _react2.default.createElement(
                _dropdownelement2.default,
                _extends({}, other, {
                    onClick: this.onDropdownClick,
                    active: this.state.active
                }),
                _react2.default.createElement(_reactEventListener2.default, { elementName: 'document',
                    onMouseDown: this.onOutsideDropdownClick,
                    onTouchStart: this.onOutsideDropdownClick }),
                this.renderDropdownInput(),
                this.renderDropdownLabels(),
                this.renderDropdownText(),
                this.renderDropdownIcon(),
                search && searchPosition === 'dropdown' && this.renderSearchInput(),
                _react2.default.createElement(
                    _reactMotionUiPack2.default,
                    {
                        component: false,
                        enter: enterAnimation,
                        leave: leaveAnimation
                    },
                    this.state.active && _react2.default.createElement(
                        _views.Menu,
                        { key: 'menu',
                            onMenuItemClick: this.onMenuItemClick,
                            ref: function ref(_ref4) {
                                return _this5.menuRef = _ref4;
                            },
                            style: { overflow: 'hidden' }
                        },
                        menuChildrens
                    )
                )
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                search: this.props.search,
                selection: this.props.selection,
                multiple: this.props.multiple
            };
        }
    }]);

    return Select;
}(_react2.default.Component), _class.propTypes = _extends({}, _dropdownelement2.default.propTypes, {
    /**
     * Should be dropdown opened
     */
    active: _react2.default.PropTypes.bool,
    /**
     * Enter animation
     */
    enterAnimation: _react2.default.PropTypes.object,
    /**
     * Leave animation
     */
    leaveAnimation: _react2.default.PropTypes.object,
    /**
     * Name for dropdown input
     */
    name: _react2.default.PropTypes.string,
    /**
     * Icon name for dropdown
     */
    icon: _react2.default.PropTypes.string,
    /**
     * String used as placeholder if dropdown has no selected value
     * Will be grayed (<div class="default text">) if dropdown is selection 
     * or normally displayed (<div class="text">) otherwise
     */
    placeholder: _react2.default.PropTypes.string,
    /**
     * Searchable dropdown
     */
    search: _react2.default.PropTypes.bool,
    /**
     * Search glyph width
     */
    searchGlyphWidth: _react2.default.PropTypes.number,
    /**
     * Ignore case when performing search
     */
    searchIgnoreCase: _react2.default.PropTypes.bool,
    /**
     * Search box position
     */
    searchPosition: _react2.default.PropTypes.oneOf(['dropdown', 'menu']),
    /**
     * Search header, valid only for searchPosition="menu"
     */
    searchHeader: _react2.default.PropTypes.string,
    /**
     * Specify message which will be displayed when search has no results
     */
    searchNoResultsMessage: _react2.default.PropTypes.string,
    /**
     * Behave dropdown as HTML select
     */
    selection: _react2.default.PropTypes.bool,
    /**
     * Allow multiple selection
     */
    multiple: _react2.default.PropTypes.bool,
    /**
     * Callback will be called when current selected value was changed. Will pass array of selected values
     */
    onSelectChange: _react2.default.PropTypes.func
}), _class.defaultProps = _extends({}, _dropdownelement2.default.defaultProps, {
    active: false,
    icon: 'dropdown',
    search: false,
    searchGlyphWidth: 1.0714,
    searchPosition: 'dropdown',
    searchIgnoreCase: true,
    searchNoResultsMessage: 'No Results found.',
    selection: true,
    multiple: false,
    enterAnimation: {
        height: 'auto'
    },
    leaveAnimation: {
        height: 0
    },
    onSelectChange: function onSelectChange() {}
}), _temp);
exports.default = Select;
//# sourceMappingURL=select.js.map