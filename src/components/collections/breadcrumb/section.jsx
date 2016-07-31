import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Breadcrumb section
 */
export default class BreadcrumbSection extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Section may be active
         */
        active: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, defaultClasses, active, ...other } = this.props;
        const Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (
            <Component {...other}/>
        );
    }

    getClasses() {
        return {
            active: this.props.active,
            section: this.props.defaultClasses
        }
    }
}
