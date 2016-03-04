import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import { defaultPropTypes, defaultPropValues } from '../../defaultProps';
import classNames from 'classnames';
import Radium from 'radium';

const validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    floated: ['right', 'left'],
    valigned: ['top', 'middle', 'bottom']

};

function getClasses(props) {
    let classes = {
        column: props.defaultClasses
    };
    
    classes[props.color] = !!props.color;
    
    // Widths
    if (props.width && props.width > 0 && props.width <= 16) {
        classes[`${Numbers[props.width]} wide`] = true;
    }
    
    if (props.mobileWidth && props.mobileWidth > 0 && props.mobileWidth <= 16) {
        classes[`${Numbers[props.mobileWidth]} wide mobile`] = true;
    }
    
    if (props.tabletWidth && props.tabletWidth > 0 && props.tabletWidth <= 16) {
        classes[`${Numbers[props.tabletWidth]} wide tablet`] = true;
    }
    
    if (props.computerWidth && props.computerWidth > 0 && props.computerWidth <= 16) {
        classes[`${Numbers[props.computerWidth]} wide computer`] = true;
    }
    
    if (props.largeScreenWidth && props.largeScreenWidth > 0 && props.largeScreenWidth <= 16) {
        classes[`${Numbers[props.largeScreenWidth]} wide large screen`] = true;
    }
    
    if (props.wideScreenWidth && props.wideScreenWidth > 0 && props.wideScreenWidth <= 16) {
        classes[`${Numbers[props.wideScreenWidth]} wide widescreen`] = true;
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
 * Grid column
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
let Column = (props) => {
    /* eslint-disable no-use-before-define */
    let {
        aligned, component, children, defaultClasses, floated, only, width, mobileWidth, tabletWidth,
        computerWidth, largeScreenWidth, wideScreenWidth, valigned, ...other
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

Column.propTypes = {
    ...defaultPropTypes,
    aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
    floated: React.PropTypes.oneOf(['right', 'left']),
    only: React.PropTypes.oneOfType([
        React.PropTypes.oneOf([
            'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
        ]),
        React.PropTypes.arrayOf(React.PropTypes.oneOf([
            'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
        ]))
    ]),
    width: React.PropTypes.number,
    mobileWidth: React.PropTypes.number,
    tabletWidth: React.PropTypes.number,
    computerWidth: React.PropTypes.number,
    largeScreenWidth: React.PropTypes.number,
    wideScreenWidth: React.PropTypes.number,
    valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
};

Column.defaultProps = {
    ...defaultPropValues
};

Column = Radium(Column);
export { Column };
