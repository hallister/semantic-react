import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';
import classNames from 'classnames';

const validProps = {
    aligned: ['right', 'left', 'center'],
    valigned: ['top', 'middle', 'bottom']
};

function getClasses(props) {
    let classes = {
        row: props.defaultClasses,
        centered: props.centered,
        doubling: props.doubling,
        stretched: props.stretched,
        justified: props.justified
    };
    
    if (props.columns && props.columns > 0 && props.columns <= 16) {
        classes[`${Numbers[props.columns]} column`] = true;
    }
    
    classes[props.color] = !!props.color;
    
    if (props.equal) {
        classes['equal width'] = true;
    }
    
    if (props.only) {
        let device;
        if (Array.isArray(props.only)) {
            device = props.only.join(' ');
        } else {
            device = props.only;
        }
        if (device) {
            classes[`${device} only`] = true;
        }
    }
    
    return validateClassProps(classes, props, validProps, { valigned: 'aligned' });
}

/**
 * Grid row
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
let Row = (props) => {
    /* eslint-disable no-use-before-define */
    let {
        aligned, component, centered, children, columns, defaultClasses, doubling, equal,
        stretched, color, only, justified, ...other
    } = props;
    /* eslint-enable no-use-before-define */
    
    let Component = component;
    other.className = classNames(other.className, getClasses(props));
    
    return (
        <Component {...other}>
            {children}
        </Component>
    );
};

Row.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Horizontal content alignment
     */
    aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
    /**
     * Center columns in row
     */
    centered: React.PropTypes.bool,
    /**
     * Double column width on tablet and mobile sizes
     */
    doubling: React.PropTypes.bool,
    /**
     * Automatically resize elements to split the available width evently
     */
    equal: React.PropTypes.bool,
    /**
     * Only visible for types. Could be single type string or array, i.e. only={["mobile","tablet"]}
     */
    only: React.PropTypes.oneOfType([
        React.PropTypes.oneOf([
            'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
        ]),
        React.PropTypes.arrayOf(React.PropTypes.oneOf([
            'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
        ])) 
    ]),
    /**
     * Specify row columns count
     */
    columns: React.PropTypes.number,
    /**
     * Stretch content to take up the entire column height
     */
    stretched: React.PropTypes.bool,
    /**
     * Row color
     */
    color: React.PropTypes.string,
    /**
     * Justified content fits exactly inside the grid column, taking up the entire width from one side to the other
     */
    justified: React.PropTypes.bool,
    /**
     * Vertical content alignment
     */
    valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
};

Row.defaultProps = {
    ...DefaultProps.defaultProps
};

export default Row;

