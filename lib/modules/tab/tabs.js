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

var _tab = require('./tab');

var _tabtitle = require('./tabtitle');

var _views = require('../../views');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Tabs = (function (_React$Component) {
    _inherits(Tabs, _React$Component);

    _createClass(Tabs, null, [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            position: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
            type: _react2['default'].PropTypes.oneOf(['tab', 'menu', 'pill'])
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            component: 'div',
            type: 'tab'
        },
        enumerable: true
    }]);

    function Tabs(props) {
        _classCallCheck(this, _Tabs);

        _get(Object.getPrototypeOf(_Tabs.prototype), 'constructor', this).call(this, props);

        this.state = {
            active: 0
        };
    }

    _createClass(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setActiveChild();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setActiveChild();
        }
    }, {
        key: 'onItemClick',
        value: function onItemClick(index) {
            this.setState({
                active: index
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this = this;

            return _react2['default'].Children.map(this.props.children, function (child, index) {
                if (child.type === _tab.Tab) {
                    return _react2['default'].cloneElement(child, {
                        active: _this.state.active === index,
                        type: _this.props.type
                    }, child.props.children);
                }
            });
        }
    }, {
        key: 'renderTitles',
        value: function renderTitles() {
            var _this2 = this;

            var tabs = [];

            _react2['default'].Children.forEach(this.props.children, function (child, index) {
                if (child.type == _tab.Tab) {
                    var props = {};

                    props.active = _this2.state.active === index;
                    props.key = index;
                    props.onClick = _this2.onItemClick.bind(_this2, index);

                    tabs.push(_react2['default'].createElement(_views.Item, props, child.props.header));
                }
            });

            return _react2['default'].createElement(
                _tabtitle.TabTitle,
                {
                    key: 'titles',
                    type: this.props.type
                },
                tabs
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
            var position = _props.position;
            var type = _props.type;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'position', 'type']);

            /* eslint-enable no-use-before-define */

            return _react2['default'].createElement(this.props.component, other, [this.renderTitles(), this.renderChildren()]);
        }
    }, {
        key: 'setActiveChild',
        value: function setActiveChild() {
            var _this3 = this;

            _react2['default'].Children.forEach(this.props.children, function (child, index) {
                if (child.type === _tab.Tab && child.props.active) {
                    _this3.setState({
                        active: index
                    });
                }
            });
        }
    }]);

    var _Tabs = Tabs;
    Tabs = (0, _radium2['default'])(Tabs) || Tabs;
    return Tabs;
})(_react2['default'].Component);

exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map