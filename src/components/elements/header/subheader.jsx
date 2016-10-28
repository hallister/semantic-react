import React from 'react';
import Header from './header';
import classNames from 'classnames';

/**
 * Sub header, same as header but with 'sub' class name
 * Deprecated
 */
export default class SubHeader extends React.PureComponent {
    static propTypes = {
        ...Header.propTypes
    };

    static defaultProps = {
        defaultClasses: true,
        item: false
    };

    /* eslint-disable */
    static Components = {
        Header: Header
    };
    /* eslint-enable */

    render() {
        const { component, children, defaultClasses, ...other } = this.props;
        let Component = component || SubHeader.Components.Header;
        other.className = classNames(other.className, { sub: defaultClasses });
        return (<Component {...other}>{children}</Component>);
    }
}
