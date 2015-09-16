import React from 'react';
import { Icon, Label, Button } from '../../elements';
import { hasChild, hasFirstChild, spliceChildren } from '../../utilities';
import classNames from 'classnames';

export class LabeledButton extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
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
        fluid: React.PropTypes.bool,
        focusable: React.PropTypes.bool,
        icon: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        labeled: React.PropTypes.oneOfType([
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
        hasIconClass: React.PropTypes.bool
    };


    static defaultProps = {
        defaultClasses: true
    };

    /*
     *  Handles buttons with an image for a label
     */
    renderButton() {
        let { ...other } = this.props;
        other.icon = true;
        other.labeled = this.props.labeled || true;

        return <Button {...other}>{this.props.children}</Button>;
    }

    /*
     *  Wraps any non-label component(s) in a div with
     */
    renderChildren() {
        let children = []

        // split children into Label and not Label arrays
        let components = spliceChildren(this.props.children, Label);
        
        // labeled is consumed by the parent button
        let { labeled, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        let icon = (
            <div 
                {...other} 
                key="icon"
            >
                {components.remaining}
            </div>
        );

        // if Label was spliced at index 0, put it first
        if (components.index == 0) {
            children.push(components.component);
            children.push(icon);
        // otherwise last
        } else {
            children.push(icon); 
            children.push(components.component);
        }

        return children;
    }

    render() {
        // this must be an icon label
        if (!hasChild(this.props.children, Label)) {
            return this.renderButton();
        }

        // most button props are consumed by the child
        let { active, basic, color, circular, compact, fluid, negative, positive, primary, secondary, 
              inverted, size, ...other } = this.props;

        other.className = classNames(other.className);

        // if the label was the first child, its direction must be left
        if (hasFirstChild(this.props.children, Label)) {
            other.labeled = 'left';

        // labels are on the right by default
        } else {
            other.labeled = true;
        }

        return <Button {...other}>{this.renderChildren()}</Button>
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // position based props
            labeled: this.props.labeled,

            // types
            animated: false,
            basic: this.props.basic,
            icon: hasChild(this.props.children, Icon) && React.Children.count(this.props.children) === 2,
            inverted: this.props.inverted,

            // states
            active: this.props.active,
            loading: this.props.loading,

            // variations
            circular: this.props.circular,
            compact: this.props.compact,
            fluid: false,
            negative: this.props.negative,
            positive: this.props.positive,
            primary: this.props.primary,
            secondary: this.props.secondary,

            // component
            button: this.props.defaultClasses
        };

        // string types
        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.social] = !!this.props.social;

        return classes;
    }
}