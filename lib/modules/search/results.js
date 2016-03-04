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

var _modules = require('../../modules');

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Results = (function (_React$Component) {
    _inherits(Results, _React$Component);

    function Results() {
        _classCallCheck(this, _Results);

        _get(Object.getPrototypeOf(_Results.prototype), 'constructor', this).apply(this, arguments);
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
            } else if (typeof this.props.results === 'object') {
                return this.renderObject();
            } else {
                return false;
            }
        }
    }, {
        key: 'renderArray',
        value: function renderArray() {
            var _this = this;

            var results = arguments[0] || this.props.results;

            return results.map(function (child) {
                var description = null;
                var title = typeof child === 'object' ? child.title : child;

                // use title and description
                if (typeof child === 'object' && child.description) {
                    description = _react2['default'].createElement(
                        'div',
                        { className: 'description' },
                        child.description
                    );
                }

                return _react2['default'].createElement(
                    'a',
                    { className: 'result',
                        onMouseDown: _this.onClick.bind(_this, title)
                    },
                    _react2['default'].createElement(
                        _elements.Content,
                        null,
                        _react2['default'].createElement(
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
            var _this2 = this;

            var children = [];

            Object.keys(this.props.results).map(function (child) {
                children.push(_react2['default'].createElement(
                    'div',
                    { className: 'category' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'name' },
                        child
                    ),
                    _this2.renderArray(_this2.props.results[child])
                ));
            });

            return children;
        }
    }, {
        key: 'renderEmpty',
        value: function renderEmpty() {
            return _react2['default'].createElement(
                'div',
                { className: 'message empty' },
                _react2['default'].createElement(
                    'div',
                    { className: 'header' },
                    this.props.emptyHeader
                ),
                _react2['default'].createElement(
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

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
            other.style = this.props.style;

            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
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
    }], [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            emptyHeader: _react2['default'].PropTypes.string,
            emptyMessage: _react2['default'].PropTypes.string,
            onSearchClick: _react2['default'].PropTypes.func,
            results: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]),
            search: _react2['default'].PropTypes.string,
            style: _react2['default'].PropTypes.object
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            component: 'div',
            defaultClasses: true,
            emptyHeader: 'No Results',
            emptyMessage: 'Your search returned no results'
        },
        enumerable: true
    }]);

    var _Results = Results;
    Results = (0, _radium2['default'])(Results) || Results;
    return Results;
})(_react2['default'].Component);

exports.Results = Results;
//# sourceMappingURL=results.js.map