import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';
import DefaultProps  from '../../defaultProps';

const validProps = {
    pointing: ['left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']
};

/**
 * Dropdown element. Base for Select and DropdownMenu.
 */
export default class DropdownElement extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Indicates status of dropdown. true for opened, false for closed
         */
        active: PropTypes.bool,
        /**
         * A compact dropdown has no minimum width
         */
        compact: PropTypes.bool,
        /**
         * A disabled dropdown menu or item does not allow user interaction
         */
        disabled: PropTypes.bool,
        /**
         * An errored dropdown can alert a user to a problem
         */
        error: PropTypes.bool,
        /**
         * A dropdown can take the full width of its parent
         */
        fluid: PropTypes.bool,
        /**
         * A dropdown can be formatted to appear inline in other content
         */
        inline: PropTypes.bool,
        /**
         * A dropdown menu can appear to be floating below an element.
         */
        floating: PropTypes.bool,
        /**
         * A dropdown can show that it is currently loading data
         */
        loading: PropTypes.bool,
        /**
         * A dropdown can be formatted so that its menu is pointing
         */
        pointing: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf([
                'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'
            ])
        ]),
        /**
         * A dropdown can have its menu scroll
         */
        scrolling: PropTypes.bool
    };

    static childContextTypes = {
        isDropdownChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        active: false
    };


    getChildContext() {
        return {
            isDropdownChild: true
        };
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { 
            active, component, children, defaultClasses, compact, disabled, error, loading,
            fluid, inline, floating, pointing, scrolling, ...other 
        } = this.props;
        /* eslint-enable no-use-before-define */
        
        other.className = classNames(other.className, this.getClasses());

        let Component = component;
        
        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            dropdown: this.props.defaultClasses,
            
            active: this.props.active,
            compact: this.props.compact,
            disabled: this.props.disabled,
            error: this.props.error,
            loading: this.props.loading,
            fluid: this.props.fluid,
            floating: this.props.floating,
            inline: this.props.inline,
            pointing: this.props.pointing,
            scrolling: this.props.scrolling
        };
        
        return validateClassProps(classes, this.props, validProps);
    }
}
