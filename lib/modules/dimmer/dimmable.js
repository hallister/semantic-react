'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Defines dimmable section
 */
var Dimmable = function Dimmable(_ref) {
    var component = _ref.component;
    var dimmed = _ref.dimmed;
    var blurring = _ref.blurring;

    var other = _objectWithoutProperties(_ref, ['component', 'dimmed', 'blurring']);

    var classes = {
        dimmable: other.defaultClasses,
        dimmed: dimmed,
        blurring: blurring
    };

    other.className = (0, _classnames2.default)(other.className, classes);
    var Component = component;
    return _react2.default.createElement(Component, other);
};

Dimmable.propTypes = _extends({}, _defaultProps2.default.propTypes, {
    /**
     * Blur dimmer
     */
    blurring: _react2.default.PropTypes.bool,
    /**
     * Add dimmed class to dimmable. This could be omitted and you can instead set overflow: hidden instead
     */
    dimmed: _react2.default.PropTypes.bool
});

Dimmable.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    dimmed: false,
    blurring: false
});

Dimmable = (0, _radium2.default)(Dimmable);

exports.default = Dimmable;
//# sourceMappingURL=dimmable.js.map