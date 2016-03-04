'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _defaultProps = require('../../defaultProps');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    aligned: ['right', 'left', 'center'],
    celled: ['internally'],
    divided: ['vertically', 'internally'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    reversed: ['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'],
    valigned: ['top', 'middle', 'bottom']
};

function getClassNames(props) {
    var classes = {
        // Default
        ui: props.defaultClasses,
        grid: props.defaultClasses,

        // variations
        container: props.container,
        relaxed: props.relaxed,
        centered: props.centered,
        stackable: props.stackable,
        doubling: props.doubling
    };

    if (props.columns && props.columns > 0 && props.columns <= 16) {
        classes[_utilities.Numbers[props.columns] + ' column'] = true;
    }

    if (props.equal) {
        classes['equal width'] = true;
    }

    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
}

/**
 * Semantic Grid
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
var Grid = function Grid(props) {
    // consume props
    /* eslint-disable no-use-before-define */
    var aligned = props.aligned;
    var defaultClasses = props.defaultClasses;
    var centered = props.centered;
    var celled = props.celled;
    var columns = props.columns;
    var container = props.container;
    var component = props.component;
    var children = props.children;
    var divided = props.divided;
    var doubling = props.doubling;
    var equal = props.equal;
    var padded = props.padded;
    var relaxed = props.relaxed;
    var reversed = props.reversed;
    var stackable = props.stackable;
    var valigned = props.valigned;

    var other = _objectWithoutProperties(props, ['aligned', 'defaultClasses', 'centered', 'celled', 'columns', 'container', 'component', 'children', 'divided', 'doubling', 'equal', 'padded', 'relaxed', 'reversed', 'stackable', 'valigned']);

    /* eslint-enable no-use-before-define */
    var Component = component;
    other.className = (0, _classnames2['default'])(other.className, getClassNames(props));
    return _react2['default'].createElement(
        Component,
        other,
        children
    );
};

Grid.propTypes = _extends({}, _defaultProps.defaultPropTypes, {
    /**
     * Horizontal content alignment
     */
    aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'center']),
    /**
     * Center columns
     */
    centered: _react2['default'].PropTypes.bool,
    /**
     * Divide rows into cells
     */
    celled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['internally']), _react2['default'].PropTypes.bool]),
    /**
     * Grid column count
     */
    columns: _react2['default'].PropTypes.number,
    /**
     * Add container class, i.e. ui grid container
     */
    container: _react2['default'].PropTypes.bool,
    /**
     * Add dividers between ros
     */
    divided: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['vertically', 'internally']), _react2['default'].PropTypes.bool]),
    /**
     * Double column width on tablet and mobile sizes
     */
    doubling: _react2['default'].PropTypes.bool,
    /**
     * Automatically resize elements to split the available width evently
     */
    equal: _react2['default'].PropTypes.bool,
    /**
     * Preserve gutters on first and las columns
     */
    padded: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['horizontally', 'vertically']), _react2['default'].PropTypes.bool]),
    /**
     * Increase size of gutters
     */
    relaxed: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['very']), _react2['default'].PropTypes.bool]),
    /**
     * Reverse the order of columns or rows by device
     */
    reversed: _react2['default'].PropTypes.oneOfType(['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically']),
    /**
     * Automatically stack rows into single columns on mobile devices
     */
    stackable: _react2['default'].PropTypes.bool,
    /**
     * Vertical content alignment
     */
    valigned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom'])
});

Grid.defaultProps = _extends({}, _defaultProps.defaultPropValues);

exports.Grid = Grid = (0, _radium2['default'])(Grid);
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map