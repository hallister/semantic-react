import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import { defaultPropTypes, defaultPropValues } from '../../defaultProps';
import classNames from 'classnames';
import Radium from 'radium';

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
    
    return validateClassProps(classes, props, validProps, {valigned: 'aligned'});
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
    ...defaultPropTypes,
    aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
    centered: React.PropTypes.bool,
    doubling: React.PropTypes.bool,
    equal: React.PropTypes.bool,
    only: React.PropTypes.oneOfType([
        React.PropTypes.oneOf([
            'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
        ]),
        React.PropTypes.arrayOf(React.PropTypes.oneOf([
            'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
        ])) 
    ]),
    columns: React.PropTypes.number,
    stretched: React.PropTypes.bool,
    color: React.PropTypes.string,
    justified: React.PropTypes.bool
};

Row.defaultProps = {
    ...defaultPropValues
};

Row = Radium(Row);
export { Row };

