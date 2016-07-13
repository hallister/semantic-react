import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Meta extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { children, className, component, defaultClasses, ...other } = this.props;
        other.className = classNames(className, { metadata: true });

        return React.createElement(
            component,
            other,
            children
        );
    }
}
