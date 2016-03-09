import React from 'react';
import { Button, Icon, Label } from '../../elements';
import classNames from 'classnames';

export default class Input extends React.Component {
    static propTypes = {
        action: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        fluid: React.PropTypes.bool,
        focus: React.PropTypes.bool,
        icon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        inverted: React.PropTypes.bool,
        labeled: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        loading: React.PropTypes.bool,
        name: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        size: React.PropTypes.string,
        state: React.PropTypes.oneOf(['disabled', 'error']),
        transparent: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        loading: false,
        placeholder: 'Search...'
    };

    renderText() {
        // see if icon and label are children
        this.processChildren();

        /* eslint-disable no-use-before-define */
        let { action, children, className, defaultClasses, icon, fluid, focus, inverted, labeled, loading, name,
              placeholder, size, state, transparent, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(
            this.props.className,
            this.getLabelClasses(),
            this.getIconClasses(),
            this.getClasses()
        );

        return React.createElement(
            this.props.component,
            other,
            this.prepareInput()
        );
    }

    // potential for types other than text
    render() {
        return this.renderText();
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            input: this.props.defaultClasses,

            // states
            disabled: this.props.state === 'disabled',
            error: this.props.state === 'error',
            focus: this.props.focus,
            loading: this.props.loading,

            // variations
            action: this.props.action,
            fluid: this.props.fluid,
            inverted: this.props.inverted,
            size: this.props.size,
            transparent: this.props.transparent
        };

        classes[this.props.size] = !!this.props.size;

        return classes;
    }

    // sets iconClass if Icon is a child
    getIconClasses() {
        let classes = {
            right: false,
            left: false,
            icon: false
        };

       // if icon exists, set the appropriate css classes
        if (this.children.icon) {
            classes.right = this.children.icon.props.right || false;
            classes.left = this.children.icon.props.left || false;
            classes.icon = true;
        }

        return classes;
    }

    // sets labelClass if label is a child
    getLabelClasses() {
        let classes = {
            right: false,
            left: false,
            corner: false,
            labeled: false
        };

        // if label exists, set the appropriate css classes
        if (this.children.label) {
            classes.right = this.children.label.props.right || false;
            classes.corner = this.children.label.props.corner || false;
            classes.left = this.children.label.props.left || (classes.corner == 'left') || false;
            classes.labeled = true;
        }

        return classes;
    }

    // ensures that the label is on the correct side of the input
    prepareInput() {
        let labelClasses = this.getLabelClasses();
        let input = [];

        // the actual input element
        let inputHTML = (
            <input
                key="input"
                placeholder={this.props.placeholder}
                name={this.props.name} />
        );

        if (labelClasses.corner) {
            input.push(inputHTML);
            input.push(this.props.children);
        } else {
            input.push(this.children.icon);

            // if label is on the right, put the input on the left
            if (labelClasses.right) {
                input.push(inputHTML);
                input.push(this.children.label);
            } else {
                input.push(this.children.label);
                input.push(inputHTML);
            }

            input.push(this.children.button);
        }

        return input;
    }


    // checks if Icon and Label are children of this Input
    // we don't use hasComponent because we need to know if two exist
    // don't need this for anything else yet, so will leave for now
    processChildren() {
        let children = {
            icon: null,
            label: null,
            button: null
        };

        React.Children.forEach(this.props.children, function(child) {
            if (child.type === Icon && typeof child.type !== 'undefined') {
                children.icon = child;
            } else if (child.type === Label && typeof child.type !== 'undefined') {
                children.label = child;
            } else if (child.type === Button && typeof child.type !== 'undefined') {
                children.button = child;
            }
        });

        this.children = children;
    }
}
