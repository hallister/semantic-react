import React from 'react';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';
import DefaultProps  from '../../defaultProps';

const validProps = {
    pointing: ['left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']
};

/**
 * Dropdown element. Base for Select and DropdownMenu.
 */
export default class DropdownElement extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Indicates status of dropdown. true for opened, false for closed
         */
        active: React.PropTypes.bool,
        /**
         * A compact dropdown has no minimum width
         */
        compact: React.PropTypes.bool,
        /**
         * A disabled dropdown menu or item does not allow user interaction
         */
        disabled: React.PropTypes.bool,
        /**
         * An errored dropdown can alert a user to a problem
         */
        error: React.PropTypes.bool,
        /**
         * A dropdown can take the full width of its parent
         */
        fluid: React.PropTypes.bool,
        /**
         * A dropdown can be formatted to appear inline in other content
         */
        inline: React.PropTypes.bool,
        /**
         * A dropdown menu can appear to be floating below an element.
         */
        floating: React.PropTypes.bool,
        /**
         * A dropdown can show that it is currently loading data
         */
        loading: React.PropTypes.bool,
        /**
         * A dropdown can be formatted so that its menu is pointing
         */
        pointing: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.oneOf([
                'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'
            ])
        ]),
        /**
         * A dropdown can have its menu scroll
         */
        scrolling: React.PropTypes.bool
    };

    static childContextTypes = {
        isDropdownChild: React.PropTypes.bool
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
            component, children, defaultClasses, compact, disabled, error, loading, 
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
