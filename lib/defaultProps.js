'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Need component to pass into react-docgen
 */
/**
 * Default prop types
 */

var DefaultProps = function DefaultProps() {
  return _react2.default.createElement('noscript', null);
};

DefaultProps.propTypes = {
  /**
   * Children nodes
   */
  children: _react2.default.PropTypes.node,
  /**
   * Use other component for composing results: <DropdownMenu component={Button}>
   */
  component: _elementType2.default,
  /**
   * Apply default semantic UI classes for component, for example ui button
   */
  defaultClasses: _react2.default.PropTypes.bool,
  /**
   * Additional CSS ui classes
   */
  className: _react2.default.PropTypes.string
};

DefaultProps.defaultProps = {
  component: 'div',
  defaultClasses: true
};

exports.default = DefaultProps;
//# sourceMappingURL=defaultProps.js.map