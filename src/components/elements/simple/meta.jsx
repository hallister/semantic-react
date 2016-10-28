import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Meta extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        const { children, className, component, defaultClasses, ...other } = this.props;
        other.className = classNames(className, { meta: true });

        return React.createElement(
            component,
            other,
            children
        );
    }
}
