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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    valigned: ['top', 'middle', 'bottom'],
    visible: ['large screen', 'wide screen', 'computer', 'mobile', 'tablet']
};

var Row = (function (_React$Component) {
    _inherits(Row, _React$Component);

    function Row() {
        _classCallCheck(this, _Row);

        _get(Object.getPrototypeOf(_Row.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Row, [{
        key: 'render',
        value: function render() {
            // consume props
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var className = _props.className;
            var component = _props.component;
            var children = _props.children;
            var color = _props.color;
            var columns = _props.columns;
            var defaultClasses = _props.defaultClasses;
            var stretched = _props.stretched;
            var valigned = _props.valigned;
            var visible = _props.visible;

            var other = _objectWithoutProperties(_props, ['aligned', 'className', 'component', 'children', 'color', 'columns', 'defaultClasses', 'stretched', 'valigned', 'visible']);

            /* eslint-enable no-use-before-define */

            // add classnames
            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var columns = _utilities.Numbers.reduce(function (obj, num) {
                obj[num + ' column'] = false;
                return obj;
            }, {});

            var classes = _extends({}, columns, {

                aligned: this.props.aligned && this.props.aligned !== 'justified',

                only: this.props.visible,

                stretched: this.props.stretched,

                row: this.props.defaultClasses
            });

            if (this.props.equal) {
                classes['equal width'] = true;
            }

            if (this.props.columns !== false) {
                if (this.props.columns > 0 && this.props.columns <= 16) {
                    classes[_utilities.Numbers[this.props.columns] + ' column'] = true;
                }
            }

            classes[this.props.color] = !!this.props.color;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { visible: 'only' });
        }
    }], [{
        key: 'propTypes',
        value: {
            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            color: _react2['default'].PropTypes.string,
            columns: _react2['default'].PropTypes.number,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            equal: _react2['default'].PropTypes.bool,
            stretched: _react2['default'].PropTypes.bool,
            valigned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom']),
            visible: _react2['default'].PropTypes.oneOf(['large screen', 'wide screen', 'computer', 'mobile', 'tablet'])
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

    var _Row = Row;
    Row = (0, _radium2['default'])(Row) || Row;
    return Row;
})(_react2['default'].Component);

exports.Row = Row;
//# sourceMappingURL=row.js.map