/**
 * Default prop types
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

/**
 * Default component propTypes applied almost to every component
 */
var defaultPropTypes = {
  /**
   * Children nodes
   */
  children: _react2['default'].PropTypes.node,
  /**
   * Use other component for composing results
   * @example
   * <Grid component={Container}>...</Grid>
   */
  component: _reactPropTypesLibElementType2['default'],
  /**
   * Apply default semantic UI classes for component, for example ui button
   */
  defaultClasses: _react2['default'].PropTypes.bool,
  /**
   * Additional CSS ui classes
   */
  className: _react2['default'].PropTypes.string
};

exports.defaultPropTypes = defaultPropTypes;
/**
 * Default Prop values
 */
var defaultPropValues = {
  component: 'div',
  defaultClasses: true
};
exports.defaultPropValues = defaultPropValues;
//# sourceMappingURL=defaultProps.js.map