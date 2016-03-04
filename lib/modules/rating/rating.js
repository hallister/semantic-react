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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Rating = (function (_React$Component) {
    _inherits(Rating, _React$Component);

    _createClass(Rating, null, [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            heart: _react2['default'].PropTypes.bool,
            max: _react2['default'].PropTypes.number,
            size: _react2['default'].PropTypes.string,
            star: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            children: null,
            component: 'div',
            defaultClasses: true,
            max: 5
        },
        enumerable: true
    }]);

    function Rating(props) {
        _classCallCheck(this, _Rating);

        _get(Object.getPrototypeOf(_Rating.prototype), 'constructor', this).call(this, props);

        this.state = {
            active: null
        };
    }

    _createClass(Rating, [{
        key: 'onIconClick',
        value: function onIconClick(index) {
            // no need to reset it when it hasn't changed
            if (index === this.state.active) return;
            this.setState({
                active: index
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var children = [];
            var classes = {
                icon: true,
                active: false
            };

            for (var i = 0; i < this.props.max; i++) {
                if (this.state.active !== null && this.state.active >= i) {
                    classes.active = true;
                } else {
                    classes.active = false;
                }

                children.push(_react2['default'].createElement('i', {
                    className: (0, _classnames2['default'])(classes),
                    key: i,
                    onClick: this.onIconClick.bind(this, i) }));
            }

            return children;
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var defaultClasses = _props.defaultClasses;
            var heart = _props.heart;
            var max = _props.max;
            var size = _props.size;
            var star = _props.star;

            var other = _objectWithoutProperties(_props, ['defaultClasses', 'heart', 'max', 'size', 'star']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                ui: this.props.defaultClasses,

                size: _react2['default'].PropTypes.string,

                // variations
                star: this.props.star,
                heart: this.props.heart,

                rating: this.props.defaultClasses
            };

            classes[this.props.size] = !!this.props.size;
            return classes;
        }
    }]);

    var _Rating = Rating;
    Rating = (0, _radium2['default'])(Rating) || Rating;
    return Rating;
})(_react2['default'].Component);

exports.Rating = Rating;
//# sourceMappingURL=rating.js.map