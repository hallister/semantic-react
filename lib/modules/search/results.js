'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Results = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modules = require('../../modules');

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = exports.Results = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Results, _React$Component);

    function Results() {
        _classCallCheck(this, Results);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Results).apply(this, arguments));
    }

    _createClass(Results, [{
        key: 'onClick',
        value: function onClick(child, e) {
            this.props.onSearchClick(e, child);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            if (this.props.results.length === 0) {
                return this.renderEmpty();
            } else if (Array.isArray(this.props.results)) {
                return this.renderArray();
            } else if (_typeof(this.props.results) === 'object') {
                return this.renderObject();
            } else {
                return false;
            }
        }
    }, {
        key: 'renderArray',
        value: function renderArray() {
            var _this2 = this;

            var results = arguments[0] || this.props.results;

            return results.map(function (child) {
                var description = null;
                var title = (typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' ? child.title : child;

                // use title and description
                if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child.description) {
                    description = _react2.default.createElement(
                        'div',
                        { className: 'description' },
                        child.description
                    );
                }

                return _react2.default.createElement(
                    'a',
                    { className: 'result',
                        onMouseDown: _this2.onClick.bind(_this2, title)
                    },
                    _react2.default.createElement(
                        _elements.Content,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            title
                        ),
                        description
                    )
                );
            });
        }
    }, {
        key: 'renderObject',
        value: function renderObject() {
            var _this3 = this;

            var children = [];

            Object.keys(this.props.results).map(function (child) {
                children.push(_react2.default.createElement(
                    'div',
                    { className: 'category' },
                    _react2.default.createElement(
                        'div',
                        { className: 'name' },
                        child
                    ),
                    _this3.renderArray(_this3.props.results[child])
                ));
            });

            return children;
        }
    }, {
        key: 'renderEmpty',
        value: function renderEmpty() {
            return _react2.default.createElement(
                'div',
                { className: 'message empty' },
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    this.props.emptyHeader
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'description' },
                    this.props.emptyMessage
                )
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
            var onSearchClick = _props.onSearchClick;
            var results = _props.results;
            var search = _props.search;
            var style = _props.style;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'emptyHeader', 'emptyMessage', 'onSearchClick', 'results', 'search', 'style']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
            other.style = this.props.style;

            return _react2.default.createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                results: this.props.defaultClasses,

                transition: this.props.defaultClasses,
                visible: this.props.defaultClasses
            };
        }
    }]);

    return Results;
}(_react2.default.Component), _class2.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    emptyHeader: _react2.default.PropTypes.string,
    emptyMessage: _react2.default.PropTypes.string,
    onSearchClick: _react2.default.PropTypes.func,
    results: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]),
    search: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object
}, _class2.defaultProps = {
    component: 'div',
    defaultClasses: true,
    emptyHeader: 'No Results',
    emptyMessage: 'Your search returned no results'
}, _temp)) || _class;
//# sourceMappingURL=results.js.map