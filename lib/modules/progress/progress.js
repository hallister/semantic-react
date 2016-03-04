'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Progress = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _modules = require('../../modules');

var _utilities = require('../../utilities');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    attached: ['top', 'bottom']
};

var Progress = exports.Progress = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress() {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).apply(this, arguments));
    }

    _createClass(Progress, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isProgressChild: true
            };
        }
    }, {
        key: 'renderBar',
        value: function renderBar() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var active = _props.active;
            var attached = _props.attached;
            var children = _props.children;
            var color = _props.color;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var error = _props.error;
            var indicating = _props.indicating;
            var inverted = _props.inverted;
            var size = _props.size;
            var success = _props.success;
            var warning = _props.warning;

            var other = _objectWithoutProperties(_props, ['active', 'attached', 'children', 'color', 'component', 'defaultClasses', 'disabled', 'error', 'indicating', 'inverted', 'size', 'success', 'warning']);
            /* eslint-enable no-use-before-define */


            other.progress = this.getProgress(other.progress);

            return _react2.default.createElement(_modules.Bar, _extends({
                key: 'progressBar'
            }, other));
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var active = _props2.active;
            var attached = _props2.attached;
            var children = _props2.children;
            var color = _props2.color;
            var component = _props2.component;
            var defaultClasses = _props2.defaultClasses;
            var disabled = _props2.disabled;
            var duration = _props2.duration;
            var error = _props2.error;
            var indicating = _props2.indicating;
            var inverted = _props2.inverted;
            var size = _props2.size;
            var success = _props2.success;
            var warning = _props2.warning;
            var progress = _props2.progress;

            var other = _objectWithoutProperties(_props2, ['active', 'attached', 'children', 'color', 'component', 'defaultClasses', 'disabled', 'duration', 'error', 'indicating', 'inverted', 'size', 'success', 'warning', 'progress']);
            /* eslint-enable no-use-before-define */

            // add classnames


            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, [this.renderBar(), this.props.children]);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // position based props
                attached: this.props.attached,

                // types

                // states
                active: this.props.active,
                disabled: this.props.disabled,
                error: this.props.error,
                success: this.props.success,
                warning: this.props.warning,

                // variations
                indicating: this.props.indicating,
                inverted: this.props.inverted,

                // component
                progress: this.props.defaultClasses
            };

            // string types
            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }, {
        key: 'getProgress',
        value: function getProgress(progress) {
            if (progress > 100) {
                return 100;
            } else if (progress < 0) {
                return 0;
            } else {
                return progress;
            }
        }
    }]);

    return Progress;
}(_react2.default.Component), _class2.propTypes = {
    active: _react2.default.PropTypes.bool,
    attached: _react2.default.PropTypes.oneOf(['top', 'bottom']),
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    color: _react2.default.PropTypes.string,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    duration: _react2.default.PropTypes.number,
    error: _react2.default.PropTypes.bool,
    indicating: _react2.default.PropTypes.bool,
    inverted: _react2.default.PropTypes.bool,
    progress: _react2.default.PropTypes.number,
    size: _react2.default.PropTypes.string,
    success: _react2.default.PropTypes.bool,
    warning: _react2.default.PropTypes.bool
}, _class2.childContextTypes = {
    isProgressChild: _react2.default.PropTypes.bool
}, _class2.defaultProps = {
    component: 'div',
    defaultClasses: true,
    duration: 300
}, _temp)) || _class;
//# sourceMappingURL=progress.js.map