'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var AccordionTitle = (function (_Component) {
    _inherits(AccordionTitle, _Component);

    _createClass(AccordionTitle, null, [{
        key: 'propTypes',
        value: {
            active: _react2['default'].PropTypes.bool,
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            defaultClasses: _react2['default'].PropTypes.bool,
            icon: _react2['default'].PropTypes.bool,
            onClick: _react2['default'].PropTypes.func

        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            defaultClasses: true,
            icon: 'dropdown'
        },
        enumerable: true
    }]);

    function AccordionTitle(props) {
        _classCallCheck(this, AccordionTitle);

        _get(Object.getPrototypeOf(AccordionTitle.prototype), 'constructor', this).call(this, props);
    }

    _createClass(AccordionTitle, [{
        key: 'render',
        value: function render() {
            var classes = {
                // default

                // positioning

                // types

                // variations
                active: this.props.active,

                // component
                title: this.props.defaultClasses
            };

            return _react2['default'].createElement(
                'div',
                {
                    className: (0, _classnames2['default'])(this.props.className, classes),
                    onClick: this.props.onClick
                },
                _react2['default'].createElement(_elements.Icon, { name: this.props.icon }),
                this.props.children
            );
        }
    }]);

    return AccordionTitle;
})(_react.Component);

exports.AccordionTitle = AccordionTitle;
//# sourceMappingURL=accordiontitle.js.map