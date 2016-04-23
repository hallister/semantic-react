import React from 'react';
import Header from './header';
import classNames from 'classnames';

/**
 * Sub header, same as header but with 'sub' class name
 * Deprecated
 */
let SubHeader = (props) => {
    const { component, children, defaultClasses, ...other } = props;
    let Component = component || SubHeader.Components.Header;
    other.className = classNames(other.className, { sub: defaultClasses });
    return (<Component {...other}>{children}</Component>);
};

SubHeader.propTypes = {
    ...Header.propTypes
};

SubHeader.defaultProps = {
    defaultClasses: true,
    item: false
};

SubHeader.Components = {
    Header: Header
};

export default SubHeader;
