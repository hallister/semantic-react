'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modules = require('../../modules');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalBody = (0, _modules.Animate)(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(ModalBody, _React$Component);

    function ModalBody(props) {
        _classCallCheck(this, ModalBody);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalBody).call(this, props));
    }

    _createClass(ModalBody, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.sizes || !this.sizes.height) {
                var component = (0, _modules.$)(this);

                this.sizes = {
                    pageHeight: (0, _modules.$)(window).height(),
                    height: component.height() + this.props.offset,
                    contextHeight: (0, _modules.$)(window).height()
                };

                this.forceUpdate();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var active = _props.active;
            var basic = _props.basic;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var fullscreen = _props.fullscreen;
            var offset = _props.offset;
            var padding = _props.padding;
            var size = _props.size;
            var style = _props.style;
            var start = _props.start;
            var end = _props.end;

            var other = _objectWithoutProperties(_props, ['active', 'basic', 'children', 'className', 'component', 'defaultClasses', 'fullscreen', 'offset', 'padding', 'size', 'style', 'start', 'end']);
            /* eslint-enable no-use-before-define */


            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            if (this.modalFits() && this.props.active) {
                other.style = Object.assign(this.props.style, {
                    top: '',
                    marginTop: -(this.sizes.height / 2)
                });
            }

            if (this.props.component == ModalBody) {
                component = 'div';
            } else {
                component = this.props.component;
            }

            return _react2.default.createElement(component, other, this.props.children);
        }
    }, {
        key: 'modalFits',
        value: function modalFits() {
            if (this.sizes != null) {
                return this.sizes.height + this.props.padding * 2 < this.sizes.contextHeight;
            } else {
                return false;
            }
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                ui: this.props.defaultClasses,

                // visibility
                visible: this.props.active,
                active: this.props.active,

                // variations
                basic: this.props.basic,
                fullscreen: this.props.fullscreen,

                // component
                modal: this.props.defaultClasses
            };

            classes[this.props.size] = !!this.props.size;

            return classes;
        }
    }]);

    return ModalBody;
}(_react2.default.Component), _class2.propTypes = {
    active: _react2.default.PropTypes.bool,
    basic: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.node,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
    defaultClasses: _react2.default.PropTypes.bool,
    end: _react2.default.PropTypes.shape({
        duration: _react2.default.PropTypes.number,
        easing: _react2.default.PropTypes.string,
        from: _react2.default.PropTypes.object,
        to: _react2.default.PropTypes.object
    }),
    fullscreen: _react2.default.PropTypes.bool,
    offset: _react2.default.PropTypes.number,
    padding: _react2.default.PropTypes.number,
    size: _react2.default.PropTypes.string,
    start: _react2.default.PropTypes.shape({
        duration: _react2.default.PropTypes.number,
        easing: _react2.default.PropTypes.string,
        from: _react2.default.PropTypes.object,
        to: _react2.default.PropTypes.object
    }),
    style: _react2.default.PropTypes.object
}, _class2.defaultProps = {
    component: 'div',
    defaultClasses: true,
    offset: 0,
    padding: 50,
    style: {}
}, _temp)) || _class;

exports.default = ModalBody;
//# sourceMappingURL=modalbody.js.map