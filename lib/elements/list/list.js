'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

var List = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isListChild: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var animated = _props.animated;
            var celled = _props.celled;
            var defaultClasses = _props.defaultClasses;
            var horizontal = _props.horizontal;
            var inverted = _props.inverted;
            var link = _props.link;
            var relaxed = _props.relaxed;
            var selection = _props.selection;
            var size = _props.size;
            var type = _props.type;

            var other = _objectWithoutProperties(_props, ['aligned', 'animated', 'celled', 'defaultClasses', 'horizontal', 'inverted', 'link', 'relaxed', 'selection', 'size', 'type']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // types
                bulleted: this.props.type === 'bulleted',
                horizontal: this.props.horizontal,
                link: this.props.link,
                ordered: this.props.type === 'ordered',

                // variations
                animated: this.props.animated,
                celled: this.props.celled && this.props.celled !== 'divided',
                divided: this.props.celled === 'divided',
                inverted: this.props.inverted,
                relaxed: this.props.relaxed,
                selection: this.props.selection,
                aligned: this.props.aligned,

                // component
                list: this.props.defaultClasses
            };

            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return List;
}(_react2.default.Component), _class2.propTypes = {
    aligned: _react2.default.PropTypes.oneOf(['top', 'middle', 'bottom']),
    animated: _react2.default.PropTypes.bool,
    celled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['divided']), _react2.default.PropTypes.bool]),
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
    horizontal: _react2.default.PropTypes.bool,
    inverted: _react2.default.PropTypes.bool,
    link: _react2.default.PropTypes.bool,
    relaxed: _react2.default.PropTypes.bool,
    selection: _react2.default.PropTypes.bool,
    size: _react2.default.PropTypes.string,
    type: _react2.default.PropTypes.oneOf(['bulleted', 'ordered'])
}, _class2.childContextTypes = {
    isListChild: _react2.default.PropTypes.bool
}, _class2.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp)) || _class;

exports.default = List;
//# sourceMappingURL=list.js.map