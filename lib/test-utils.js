'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/jsx-max-props-per-line */


exports.itShouldPassUnusedDataProps = itShouldPassUnusedDataProps;
exports.itShouldConsumeOwnAndPassCustomProps = itShouldConsumeOwnAndPassCustomProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var standardProps = {
    style: {
        background: 'green'
    },
    className: 'test'
};

function itShouldPassUnusedDataProps(Component, props) {
    it('passes unused data props', function () {

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(Component, _extends({}, props, {
            'data-test': 'test',
            dataTest: 'test' })));

        (0, _chai.expect)(wrapper).to.have.prop('data-test', 'test');
        (0, _chai.expect)(wrapper).to.have.prop('dataTest', 'test');
    });
}

function itShouldConsumeOwnAndPassCustomProps(Component, props) {
    describe('should properly pass props', function () {
        it('consumes all used props', function () {
            // Funny trick to check component and it's rendered output
            // We need to validate both props passed to component and props for the component's rendered output
            // If we do shallow(<Component {...props}/>) then shallow renderer will do component rendering instead
            // Actually component rendering will be performed later
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Component, props)
            ));

            // Here the new wrapper for component rendered output
            var componentWrapper = wrapper.find(Component).shallow();

            for (var prop in props) {
                (0, _chai.expect)(wrapper.find(Component)).to.have.prop(prop, props[prop]);
                // Check if rendered output doesn't contain consumed prop
                // Using expect.fail() here to prevent standard error to avoid confusion, since it will display component name
                if (typeof componentWrapper.prop(prop) !== 'undefined') {
                    _chai.expect.fail(null, null, 'Rendered output shouldn\'t have property: ' + prop);
                }
            }
        });

        it('passes standard props', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Component, _extends({}, props, standardProps))
            ));
            var componentWrapper = wrapper.find(Component).shallow();

            for (var prop in standardProps) {
                (0, _chai.expect)(wrapper.find(Component)).to.have.prop(prop, standardProps[prop]);
                if (typeof componentWrapper.prop(prop) === 'undefined') {
                    _chai.expect.fail(null, null, 'Rendered output should have standard property: ' + prop);
                }
            }
        });

        itShouldPassUnusedDataProps(Component, props);
    });
}
//# sourceMappingURL=test-utils.js.map