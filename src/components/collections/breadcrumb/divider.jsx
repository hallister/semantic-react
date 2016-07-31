import React from 'react';
import classNames from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import DefaultProps from '../../defaultProps';

/**
 * Divider for breadcrumb
 */
export default class BreadcrumbDivider extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Icon divider
         */
        icon: React.PropTypes.string
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, defaultClasses, icon, ...other } = this.props;
        other.className = classNames(other.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}/>
        );
    }

    getClasses() {
        return {
            [this.props.icon]: !!this.props.icon,
            icon: this.props.icon,
            divider: this.props.defaultClasses
        }
    }
}
