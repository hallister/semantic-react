import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Label detail element
 */
export default class Detail extends React.Component {
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
        const { component, children, defaultClasses, ...other } = this.props;
        let Component = component;
        other.className = classNames(other.className, { detail: defaultClasses });
        return (<Component {...other}>{children}</Component>);
    }
}
