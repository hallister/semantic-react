import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Breadcrumb section
 */
export default class BreadcrumbSection extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Section may be active
         */
        active: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

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
