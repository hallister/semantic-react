import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
    // No 'size' here to avoid validateClassProps() picking it up and adding classes
};

/**
 * Group of buttons
 */
export default class Buttons extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * It's attached to some other attachable component.
         */
        attached: React.PropTypes.oneOf(['bottom', 'top']),

        /**
         * Adds simple styling to the component.
         */
        basic: React.PropTypes.bool,

        /**
         * Adds a SemanticUI color class.
         */
        color: React.PropTypes.string,

        /**
         * Reduces the padding on the component.
         */
        compact: React.PropTypes.bool,

        /**
         * Forces all children to an equal width.
         */
        equal: React.PropTypes.bool,

        /**
         * Forces to component to float left or right.
         */
        floated: React.PropTypes.oneOf(['left', 'right']),

        /**
         * Styles the component for a dark background.
         */
        inverted: React.PropTypes.bool,

        /**
         * Adds a SemanticUI size class.
         */
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),

        /**
         * Forces child components to render vertically.
         */
        vertical: React.PropTypes.bool
    };

    static childContextTypes = {
        isAttached: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    getChildContext() {
        return {
            isAttached: !!this.props.attached
        };
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { attached, basic, children, className, color, compact, component,
              defaultClasses, equal, floated, inverted, size,
              vertical, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            basic: this.props.basic,
            inverted: this.props.inverted,

            // variations
            attached: this.props.attached,
            compact: this.props.compact,
            vertical: this.props.vertical,

            // component
            buttons: this.props.defaultClasses
        };

        let childCount = React.Children.count(this.props.children);

        // buttons group with >0 buttons that are all of equal width
        if (this.props.equal) {
            if (childCount > 1  && childCount <= 12) {
                classes[Numbers[childCount]] = true;
            } else {
                classes['fluid'] = true;
            }
        }

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
