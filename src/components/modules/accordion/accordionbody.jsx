import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Accordion body (content)
 */
export default class AccordionBody extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * True for active (visible) accordion section. This is being set by Accordion itself
         */
        active: PropTypes.bool,
        /**
         * True for styled accordion. This is being set by Accordion itself
         */
        styled: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        active: false,
        styled: false
    };


    render() {
        const {
            component, children, defaultClasses, active, styled, ...other
        } = this.props;
        const Component = component;
        other.className = classNames(other.className, {
            content: defaultClasses,
            active: active
        });

        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }
}
