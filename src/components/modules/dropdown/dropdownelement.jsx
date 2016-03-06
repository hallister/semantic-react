import React from 'react';
import classNames from 'classnames';
import DefaultProps  from '../../defaultProps';

/**
 * Dropdown element. Base for Select and DropdownMenu.
 */
export default class DropdownElement extends React.Component {
    // Here only props which are shared for selection and menu type dropdowns
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
         * A dropdown can show that it is currently loading data
         */
        loading: React.PropTypes.bool,
        /**
         * A dropdown can take the full width of its parent
         */
        fluid: React.PropTypes.bool,
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
        let { component, children, defaultClasses, compact, disabled, error, loading, fluid, scrolling,
              ...other } = this.props;
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
        return {
            ui: this.props.defaultClasses,
            dropdown: this.props.defaultClasses,
            
            active: this.props.active,
            compact: this.props.compact,
            disabled: this.props.disabled,
            error: this.props.error,
            loading: this.props.loading,
            fluid: this.props.fluid,
            scrolling: this.props.scrolling
        }
    }
}
