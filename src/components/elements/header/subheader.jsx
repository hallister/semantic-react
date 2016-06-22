import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Header from './header';
import classNames from 'classnames';

/**
 * Sub header, same as header but with 'sub' class name
 * Deprecated
 */
export default class SubHeader extends React.Component {
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

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, children, defaultClasses, ...other } = this.props;
        let Component = component || SubHeader.Components.Header;
        other.className = classNames(other.className, { sub: defaultClasses });
        return (<Component {...other}>{children}</Component>);
    }
}
