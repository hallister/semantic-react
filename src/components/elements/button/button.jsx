import React from 'react';
import { Icon, Label } from '../../elements';
import { hasChild, hasFirstChild } from '../../utilities';
import classNames from 'classnames';

export class Button extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        animated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        attached: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.any,
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.string,
        fluid: React.PropTypes.bool,
        focusable: React.PropTypes.bool,
        icon: React.PropTypes.string,
        inverted: React.PropTypes.bool,
        labeled:  React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        loading: React.PropTypes.bool,
        negative: React.PropTypes.bool,
        positive: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        size: React.PropTypes.string,
        social: React.PropTypes.string
    };

    static contextTypes = {
        isAttached: React.PropTypes.bool,
        isButtonChild: React.PropTypes.bool,
        hasIconClass: React.PropTypes.bool
    };

    static childContextTypes = {
        isButtonChild: React.PropTypes.bool
    };

    static defaultProps = {
        animated: false,
        attached: false,
        defaultClasses: true
    };

    getChildContext() {
        return {
            isButtonChild: true
        };
    }

    render() {
        // select the proper component
        let Component = this.context.isButtonChild || 
                        hasChild(this.props.children, Button) ||
                        (this.props.attached || this.context.isAttached || this.props.animated) ? 'div' : 'button';

        // consume props
        let { active, animated, attached, basic, children, circular, color, component, compact, className, defaultClasses, 
            disabled, fluid, inverted, label, loading, negative, positive, primary, secondary, size, social, 
            ...other } = this.props;

        // add classnames
        other.className = classNames(this.props.className, this.getClasses());

        // the whitespace render {' '} fixes a bug in chrome which doesn't apply proper padding 
        // if no white space exists in labeled buttons that don't have free-floating text after 
        // the icon
        return React.createElement(
            this.props.component || Component,
            other,
            this.props.children
        );
    }

    isLabeled() {
        if (React.Children.count(this.props.children) > 1 && 
            (
                hasChild(this.props.children, Icon) || 
                hasChild(this.props.children, Button)
            ) && 
            ( 
                hasChild(this.props.children, Label) ||
                (hasChild(this.props.children, 'string') && !this.context.isButtonChild)
            )
        ) {
            return true;
        } else {
            return false;
        }
    }

    isIcon() {
        if (hasChild(this.props.children, Icon) && 
            (
                !this.context.isButtonChild ||
                React.Children.count(this.props.children) === 1
            ) && 
            !this.context.hasIconClass &&
            (
                !this.props.social ||
                this.props.circular
            )
        ) {
            return true;
        } else {
            return false;  
        }


        /*
        // if the parent has an icon class OR there is no icon child
        if (this.context.hasIconClass || !hasChild(this.props.children, Icon)) {
            return false;
        } 

        // if it's a circular button OR it's not a social button
        if (!this.props.social || this.props.circular) {
            return false
        }

        // it has one child OR 
        if (!this.context.isButtonChild || React.Children.count(this.props.children === 1)) {
            return false;
        }

        return true;
*/
        /* This element has an Icon child and it's either circular or not social and it either has one child or 
           It's not a Button Child */

        //hasChild(this.props.children, Icon) && 
        //(!this.props.social || this.props.circular)  && 
        // (!this.context.isButtonChild || React.Children.count(this.props.children) === 1),
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning
            left: false,
            right: false,

            // floated prop needs to stick with psoitioning
            floated: this.props.floated,
            labeled: (this.isLabeled() || this.props.labeled) && !this.props.social,

            // types
            animated: this.props.animated,
            basic: this.props.basic,
            icon: (this.isIcon() || this.props.icon),
            inverted: this.props.inverted,


            // states
            active: this.props.active,
            disabled: this.props.disabled,
            loading: this.props.loading,

            // variations

            attached: this.props.attached,
            circular: this.props.circular,
            compact: this.props.compact,
            fluid: this.props.fluid,
            negative: this.props.negative,
            positive: this.props.positive,
            primary: this.props.primary,
            secondary: this.props.secondary,

            // component
            button: this.props.defaultClasses
        };

        // handle mixed string/bool props
        classes[this.props.animated] = typeof this.props.animated == 'string' ? true : false;
        classes[this.props.attached] = typeof this.props.attached == 'string' ? true : false;
        classes[this.props.labeled] = typeof this.props.labeled == 'string' ? true : false
        
        // string types
        classes[this.props.color] = !!this.props.color;
        classes[this.props.floated] = !!this.props.floated;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.social] = !!this.props.social;

        classes.left = hasFirstChild(this.props.children, Label) || classes.left;

        return classes;
    }
}