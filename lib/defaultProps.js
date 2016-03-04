'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPropValues = exports.defaultPropTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default component propTypes applied almost to every component
 */
/**
 * Default prop types
 */

var defaultPropTypes = exports.defaultPropTypes = {
  /**
   * Children nodes
   */
  children: _react2.default.PropTypes.node,
  /**
   * Use other component for composing results
   * @example
   * <Grid component={Container}>...</Grid>
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

/**
 * Default Prop values
 */
var defaultPropValues = exports.defaultPropValues = {
  component: 'div',
  defaultClasses: true
};
//# sourceMappingURL=defaultProps.js.map