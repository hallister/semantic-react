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

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _results = require('./results');

var _results2 = _interopRequireDefault(_results);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
3 support results types:

{
    title: 'test',
    description: 'testing'
}

{
    animal: ['cat', 'dog']
}

['test', 'test']
*/
var Search = (_temp = _class = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

        _this.state = {
            focus: false
        };
        return _this;
    }

    _createClass(Search, [{
        key: 'onBlur',
        value: function onBlur() {
            if (this.state.focus) {
                this.setState({
                    focus: false
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            this.props.onChange(e);
        }
    }, {
        key: 'onFocus',
        value: function onFocus(e) {
            this.setState({
                focus: true
            });
        }
    }, {
        key: 'onSearchClick',
        value: function onSearchClick(e, child) {
            this.props.onSearchClick(e, child);
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            return _react2.default.createElement(
                'div',
                { className: this.getClassesInput(), key: 'searchInput' },
                _react2.default.createElement('input', { className: 'prompt',
                    onBlur: this.onBlur.bind(this),
                    onChange: this.onChange.bind(this),
                    onFocus: this.onFocus.bind(this),
                    placeholder: this.props.placeholder,
                    value: this.props.value,
                    type: 'text' }),
                this.renderInputIcon()
            );
        }
    }, {
        key: 'getClassesInput',
        value: function getClassesInput() {
            return (0, _classnames2.default)('ui input', {
                icon: Boolean(this.props.icon)
            });
        }
    }, {
        key: 'renderInputIcon',
        value: function renderInputIcon() {
            if (!this.props.icon) return null;

            return _react2.default.createElement(_elements.Icon, { name: this.props.icon });
        }
    }, {
        key: 'renderResults',
        value: function renderResults() {
            var props = {
                animate: this.state.focus && this.props.value !== '',
                emptyHeader: this.props.emptyHeader,
                emptyMessage: this.props.emptyMessage,
                key: 'searchResults',
                onSearchClick: this.onSearchClick.bind(this),
                results: this.state.focus ? this.props.results : [],
                search: this.props.value || ''
            };

            return _react2.default.createElement(
                _reactMotionUiPack2.default,
                { component: false,
                    enter: this.props.enterAnimation,
                    leave: this.props.leaveAnimation
                },
                this.state.focus && this.searchInput.value !== '' && _react2.default.createElement(_results2.default, props)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var emptyHeader = _props.emptyHeader;
            var emptyMessage = _props.emptyMessage;
            var enterAnimation = _props.enterAnimation;
            var icon = _props.icon;
            var leaveAnimation = _props.leaveAnimation;
            var loading = _props.loading;
            var onChange = _props.onChange;
            var onSearchClick = _props.onSearchClick;
            var placeholder = _props.placeholder;
            var results = _props.results;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'emptyHeader', 'emptyMessage', 'enterAnimation', 'icon', 'leaveAnimation', 'loading', 'onChange', 'onSearchClick', 'placeholder', 'results']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, [this.renderInput(), this.renderResults()]);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                ui: this.props.defaultClasses,
                search: this.props.defaultClasses,

                // state
                loading: this.props.loading,
                focus: this.state.focus,

                category: !Array.isArray(this.props.results)
            };
        }
    }]);

    return Search;
}(_react2.default.Component), _class.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    emptyHeader: _react2.default.PropTypes.string,
    emptyMessage: _react2.default.PropTypes.string,
    enterAnimation: _react2.default.PropTypes.object,
    icon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
    leaveAnimation: _react2.default.PropTypes.object,
    loading: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func.isRequired,
    onSearchClick: _react2.default.PropTypes.func,
    placeholder: _react2.default.PropTypes.string,
    results: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]),
    value: _react2.default.PropTypes.string
}, _class.defaultProps = {
    component: 'div',
    defaultClasses: true,
    enterAnimation: {
        opacity: 1,
        scale: 1
    },
    leaveAnimation: {
        opacity: 0,
        scale: 0
    },
    icon: 'search',
    onSearchClick: function noop() {},
    placeholder: 'Search...',
    value: ''
}, _temp);
exports.default = Search;
//# sourceMappingURL=search.js.map