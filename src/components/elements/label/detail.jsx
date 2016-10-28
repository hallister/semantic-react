import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Label detail element
 */
export default class Detail extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        const { component, children, defaultClasses, ...other } = this.props;
        let Component = component;
        other.className = classNames(other.className, { detail: defaultClasses });
        return (<Component {...other}>{children}</Component>);
    }
}
