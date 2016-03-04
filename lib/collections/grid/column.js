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

var _utilities = require('../../utilities');

var _collections = require('../../collections');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    floated: ['right', 'left'],
    visible: ['large screen', 'wide screen', 'computer', 'mobile', 'tablet'],
    valigned: ['top', 'middle', 'bottom']

};

var Column = (function (_React$Component) {
    _inherits(Column, _React$Component);

    _createClass(Column, null, [{
        key: 'propTypes',
        value: {
            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            color: _react2['default'].PropTypes.string,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
            style: _react2['default'].PropTypes.any,
            valigned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom']),
            visible: _react2['default'].PropTypes.oneOf(['large screen', 'wide screen', 'computer', 'mobile', 'tablet']),
            width: _react2['default'].PropTypes.number
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

    function Column(props) {
        _classCallCheck(this, _Column);

        _get(Object.getPrototypeOf(_Column.prototype), 'constructor', this).call(this, props);

        this.style = {
            mobile: {},
            computer: {},
            tablet: {}
        };
    }

    _createClass(Column, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.forceUpdate();
        }
    }, {
        key: 'onFoundDevice',
        value: function onFoundDevice(style, type) {
            this.style[type] = style;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this = this;

            var children = [_collections.Device, _collections.Computer, _collections.Tablet, _collections.Mobile];
            return _react2['default'].Children.map(this.props.children, function (child, index) {
                if (children.indexOf(child.type) > -1) {
                    return _react2['default'].cloneElement(child, {
                        callback: _this.onFoundDevice.bind(_this),
                        key: index
                    }, child.children);
                } else {
                    return child;
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // consume props
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var color = _props.color;
            var component = _props.component;
            var className = _props.className;
            var children = _props.children;
            var defaultClasses = _props.defaultClasses;
            var floated = _props.floated;
            var valigned = _props.valigned;
            var width = _props.width;

            var other = _objectWithoutProperties(_props, ['aligned', 'color', 'component', 'className', 'children', 'defaultClasses', 'floated', 'valigned', 'width']);

            /* eslint-enable no-use-before-define */

            // add classnames
            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, _react2['default'].Children.count(this.props.children) !== 0 ? this.renderChildren() : []);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = _extends({}, this.style.computer, this.style.tablet, this.style.mobile, {
                column: this.props.defaultClasses,

                aligned: this.props.aligned && this.props.aligned !== 'justified'
            });

            classes[this.props.color] = !!this.props.color;

            if (this.props.width) {
                if (this.props.width > 0 && this.props.width <= 16) {
                    classes[_utilities.Numbers[this.props.width] + ' wide'] = true;
                }
            }

            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { visible: 'only', valigned: 'aligned' });
        }
    }]);

    var _Column = Column;
    Column = (0, _radium2['default'])(Column) || Column;
    return Column;
})(_react2['default'].Component);

exports.Column = Column;
//# sourceMappingURL=column.js.map