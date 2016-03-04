import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';
import classNames from 'classnames';
import Radium from 'radium';

const validProps = {
    aligned: ['right', 'left', 'center'],
    celled: ['internally'],
    divided: ['vertically', 'internally'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    reversed: ['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'],
    valigned: ['top', 'middle', 'bottom']
};

function getClassNames(props) {
    let classes = {
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
        classes[`${Numbers[props.columns]} column`] = true;
    }
    
    if (props.equal) {
        classes['equal width'] = true;
    }
    
    return validateClassProps(classes, props, validProps, { valigned: 'aligned' });
}

/**
 * Semantic Grid
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
let Grid = (props) => {
    // consume props
    /* eslint-disable no-use-before-define */
    let {
        aligned, defaultClasses, centered, celled, columns, container, component, children,
        divided, doubling, equal, padded, relaxed, reversed, stackable, valigned,
        ...other
    } = props;
    /* eslint-enable no-use-before-define */
    const Component = component;
    other.className = classNames(other.className, getClassNames(props));
    return (
        <Component 
            {...other} 
        >
            {children}
        </Component>
    );
};

Grid.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Horizontal content alignment
     */
    aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
    /**
     * Center columns
     */
    centered: React.PropTypes.bool,
    /**
     * Divide rows into cells
     */
    celled: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['internally']),
        React.PropTypes.bool
    ]),
    /**
     * Grid column count
     */
    columns: React.PropTypes.number,
    /**
     * Add container class, i.e. ui grid container
     */
    container: React.PropTypes.bool,
    /**
     * Add dividers between ros
     */
    divided: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['vertically', 'internally']),
        React.PropTypes.bool
    ]),
    /**
     * Double column width on tablet and mobile sizes
     */
    doubling: React.PropTypes.bool,
    /**
     * Automatically resize elements to split the available width evently
     */
    equal: React.PropTypes.bool,
    /**
     * Preserve gutters on first and las columns
     */
    padded: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['horizontally', 'vertically']),
        React.PropTypes.bool
    ]),
    /**
     * Increase size of gutters
     */
    relaxed: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['very']),
        React.PropTypes.bool
    ]),
    /**
     * Reverse the order of columns or rows by device
     */
    reversed: React.PropTypes.oneOfType([
        'mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'
    ]),
    /**
     * Automatically stack rows into single columns on mobile devices
     */
    stackable: React.PropTypes.bool,
    /**
     * Vertical content alignment
     */
    valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
};

Grid.defaultProps = {
    ...DefaultProps.defaultProps
};

Grid = Radium(Grid);
export default Grid;
