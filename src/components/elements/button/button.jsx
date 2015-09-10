import React from 'react';
import { Icon, Label } from '../../elements';
import { hasChild, hasFirstChild, handleMultiClasses } from '../../utilities';
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

    stringProps = [
        {
            prop: 'floated',
            options: ['right', 'left']
        },
        {
            prop: 'labeled',
            options: ['right', 'left']
        }
    ];

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

        return React.createElement(
            this.props.component || Component,
            other,
            this.props.children
        );
    }

    hasLabel() {
        // it has more than one children and the child is anIcon or a Button
        if (React.Children.count(this.props.children) > 1 && 
            (
                hasChild(this.props.children, Icon) || 
                hasChild(this.props.children, Button)
            ) && 

            // another child is either a Label or free-floating text, but free-floating text
            // won't work if it's also a child of a button. Fixes complex labeled icon buttons
            ( 
                hasChild(this.props.children, Label) ||
                (hasChild(this.props.children, 'string') && !this.context.isButtonChild)
            ) &&
            // social icons are never labeled
            !this.props.social
        ) {
            return true;
        } else {
            return false;
        }
    }

    hasIcon() {
        // must have a icon as a direct child
        if (hasChild(this.props.children, Icon) && 
            (
                // if this is not a child of another button OR it only has a single child (that must be an icon)
                !this.context.isButtonChild ||
                React.Children.count(this.props.children) === 1
            ) && 
            // if the parent (button) does not already have an icon class (neccesary?)
            !this.context.hasIconClass &&
            // if it's not a social button OR it's circular
            (
                !this.props.social ||
                this.props.circular
            )
        ) {
            return true;
        } else {
            return false;  
        }
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // floated prop needs to stick with psoitioning
            floated: this.props.floated,
            labeled: this.hasLabel() || this.props.labeled,

            // types
            animated: this.props.animated,
            basic: this.props.basic,
            icon: (this.hasIcon() || this.props.icon),
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
        //classes[this.props.labeled] = typeof this.props.labeled == 'string' ? true : false
        
        // string types
        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.social] = !!this.props.social;

        classes = handleMultiClasses(classes, this.props, this.stringProps);

        /* special case for labeled icons. this handles the use-case where a button has a 
           label and a button as a child. The better use case is allowing this syntax:
            
            <Button>
                <Icon name="heart" /> Like
                <Label basic>
                    2,048
                </Label>
            </Button>

            which would convert to

            <Button>
                <div class="ui button">
                    <Icon name="heart" /> Like
                </div>
                <Label basic>
                    2,048
                </Label>
            </Button>

            This should be easy to fix (has child of type Icon and of type Label)
        */
        if (hasFirstChild(this.props.children, Label)) {
            classes['left labeled'] = true;
            classes['labeled'] = false;
        }

        return classes;
    }
}