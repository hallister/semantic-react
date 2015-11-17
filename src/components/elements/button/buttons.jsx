import React from 'react';
import { LabeledButton, IconButton } from '../../elements';
import { Numbers, validateClassProps, isEveryChild } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
}

export class Buttons extends React.Component {
    static propTypes = {
        /**
         * It's attached to some other attachable component.
         */
        attached: React.PropTypes.oneOf(['bottom', 'top']),

        /**
         * Adds simple styling to the component.
         */
        basic: React.PropTypes.bool,

        /**
         * The child nodes of the component.
         */
        children: React.PropTypes.node,

        /**
         * Adds additional classes to the component.
         */
        className: React.PropTypes.node,

        /**
         * Adds a SemanticUI color class.
         */
        color: React.PropTypes.string,

        /**
         * Reduces the padding on the component.
         */
        compact: React.PropTypes.bool,

        /**
         * Overrides the component with a custom component string ('div') or
         * ReactElement.
         */
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),

        /**
         * Adds the default classes for the component.
         */
        defaultClasses: React.PropTypes.bool,

        /**
         * Forces all children to an equal width.
         */
        equal: React.PropTypes.bool,

        /**
         * Forces to component to float left or right.
         */
        floated: React.PropTypes.oneOf(['right', 'left']),

        /**
         * Overrides default behavior and adds the icon class to the component.
         */
        icon: React.PropTypes.bool,

        /**
         * Styles the component for a dark background.
         */
        inverted: React.PropTypes.bool,

        /**
         * Overrides default behavior and adds the labeled class to the
         * component.
         */
        labeled: React.PropTypes.bool,

        /**
         * Adds a SemanticUI size class.
         */
        size: React.PropTypes.string,

        /**
         * Forces child components to render vertically.
         */
        vertical: React.PropTypes.bool
    };

    static childContextTypes = {
        isAttached: React.PropTypes.bool,
        isIconButtons: React.PropTypes.bool,
        isLabeledButtons: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    getChildContext() {
        return {
            isAttached: !!this.props.attached,
            isIconButtons: !!this.props.icon,
            isLabeledButtons: !!this.props.labeled
        };
    }

    render() {
        let { attached, basic, children, className, color, compact, component,
              defaultClasses, equal, floated, icon, inverted, labeled, size,
              vertical, ...other } = this.props;

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
            icon: this.props.icon || isEveryChild(this.props.children, IconButton),
            inverted: this.props.inverted,
            labeled: this.props.labeled || isEveryChild(this.props.children, LabeledButton),

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
