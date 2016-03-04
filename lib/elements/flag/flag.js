'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var Flag = function Flag(props) {
    var other = Object.assign({}, props);
    other.className = 'flag';
    other.defaultClasses = false;

    return _react2['default'].createElement(_elements.Icon, other);
};

Flag.propTypes = {
    /**
     * The country code, name or alias of the flag
     */
    name: _react2['default'].PropTypes.string.isRequired
};

exports['default'] = Flag;
module.exports = exports['default'];
//# sourceMappingURL=flag.js.map