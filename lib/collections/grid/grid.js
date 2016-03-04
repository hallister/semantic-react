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
    celled: ['internally'],
    divided: ['vertically'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    valigned: ['top', 'middle', 'bottom']
};

var Grid = (function (_React$Component) {
    _inherits(Grid, _React$Component);

    _createClass(Grid, null, [{
        key: 'propTypes',
        value: {
            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
            celled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['internally']), _react2['default'].PropTypes.bool]),
            centered: _react2['default'].PropTypes.bool,
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            columns: _react2['default'].PropTypes.number,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            container: _react2['default'].PropTypes.bool,
            defaultClasses: _react2['default'].PropTypes.bool,
            divided: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['vertically']), _react2['default'].PropTypes.bool]),
            doubling: _react2['default'].PropTypes.bool,
            equal: _react2['default'].PropTypes.bool,
            padded: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['horizontally', 'vertically']), _react2['default'].PropTypes.bool]),
            relaxed: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['very']), _react2['default'].PropTypes.bool]),
            stackable: _react2['default'].PropTypes.bool,
            valigned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom'])
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

    function Grid(props) {
        _classCallCheck(this, _Grid);

        _get(Object.getPrototypeOf(_Grid.prototype), 'constructor', this).call(this, props);

        this.style = {
            mobile: {},
            computer: {},
            tablet: {}
        };
    }

    _createClass(Grid, [{
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
            var celled = _props.celled;
            var centered = _props.centered;
            var children = _props.children;
            var columns = _props.columns;
            var component = _props.component;
            var container = _props.container;
            var className = _props.className;
            var defaultClasses = _props.defaultClasses;
            var divided = _props.divided;
            var doubling = _props.doubling;
            var equal = _props.equal;
            var padded = _props.padded;
            var relaxed = _props.relaxed;
            var stackable = _props.stackable;
            var valigned = _props.valigned;

            var other = _objectWithoutProperties(_props, ['aligned', 'celled', 'centered', 'children', 'columns', 'component', 'container', 'className', 'defaultClasses', 'divided', 'doubling', 'equal', 'padded', 'relaxed', 'stackable', 'valigned']);

            /* eslint-enable no-use-before-define */

            // add classnames
            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var columns = _utilities.Numbers.reduce(function (obj, num) {
                obj[num + ' column'] = false;
                return obj;
            }, {});

            var classes = _extends({
                ui: this.props.defaultClasses
            }, this.style.computer, this.style.tablet, this.style.mobile, columns, {

                aligned: this.props.aligned && this.props.aligned !== 'justified',
                container: this.props.container,
                centered: this.props.centered,
                celled: this.props.celled,
                doubling: this.props.doubling,
                divided: this.props.divided,
                padded: this.props.padded,
                relaxed: this.props.relaxed,
                stackable: this.props.stackable,

                grid: this.props.defaultClasses
            });

            if (this.props.equal) {
                classes['equal width'] = true;
            }

            if (this.props.columns !== false) {
                if (this.props.columns > 0 && this.props.columns <= 16) {
                    classes[_utilities.Numbers[this.props.columns] + ' column'] = true;
                }
            }

            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { valigned: 'aligned' });
        }
    }]);

    var _Grid = Grid;
    Grid = (0, _radium2['default'])(Grid) || Grid;
    return Grid;
})(_react2['default'].Component);

exports.Grid = Grid;
//# sourceMappingURL=grid.js.map