import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';


export default class Author extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'a'
    };

    render() {
        const { children, className, component, defaultClasses, ...other } = this.props;
        other.className = classNames(className, { author: true });

        return React.createElement(
            component,
            other,
            children
        );
    }
}
