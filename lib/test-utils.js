'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.itShouldPassUnusedDataProps = itShouldPassUnusedDataProps;
exports.itShouldConsumeOwnAndPassCustomProps = itShouldConsumeOwnAndPassCustomProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

function itShouldPassUnusedDataProps(Component, props) {
    it('passes unused data props', function () {

        var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(Component, _extends({}, props, {
            'data-test': 'test',
            dataTest: 'test' })));

        (0, _chai.expect)(wrapper).to.have.prop('data-test', 'test');
        (0, _chai.expect)(wrapper).to.have.prop('dataTest', 'test');
    });
}

function itShouldConsumeOwnAndPassCustomProps(Component, props) {
    describe('should properly pass props', function () {
        it('consumes all used props', function () {
            var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(Component, props));
            (0, _chai.expect)(wrapper).to.have.prop('className');
        });

        if (props.className) {
            it('passes the className prop', function () {
                var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(Component, props));
                (0, _chai.expect)(wrapper).to.have.className(props.className);
            });
        }

        itShouldPassUnusedDataProps(Component, props);
    });
}
//# sourceMappingURL=test-utils.js.map