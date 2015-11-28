import React from 'react';
import { Icon } from '../../elements';
import { hasChild, validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

export default class Header extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['bottom', 'top']),
            React.PropTypes.bool
        ]),
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        divider: React.PropTypes.bool,
        emphasis: React.PropTypes.oneOf(['dividing', 'block']),
        floated: React.PropTypes.oneOf(['right', 'left']),
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        item: React.PropTypes.bool,
        size: React.PropTypes.string
    };

    // we don't want the ui in these circumstances
    static contextTypes = {
        isListChild: React.PropTypes.bool,
        isHeaderChild: React.PropTypes.bool,
        isAccordionChild: React.PropTypes.bool,
        isMenuChild: React.PropTypes.bool
    };

    // any header/sub header under a header is a sub header
    static childContextTypes = {
        isHeaderChild: React.PropTypes.bool
    };

    static defaultProps = {
        attached: false,
        defaultClasses: true,
        item: true // handles
    };

    getChildContext() {
        return {
            isHeaderChild: true
        };
    }

    render() {
        let Component = this.props.onClick ? 'a' : 'div';

        let { aligned, attached, children, className, color, component,
              defaultClasses, disabled, divider, emphasis, floated,
              horizontal, inverted, item, size,
              ...other } = this.props;

        // add class names
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component || Component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses  && !this.context.isListChild && !this.context.isHeaderChild && !this.context.isMenuChild,

            // types
            icon: hasChild(this.props.children, Icon) && this.props.aligned == 'center',
            item: this.context.isMenuChild && this.props.item,

            // states
            disabled: this.props.disabled,

            // variations
            aligned: this.props.aligned && this.props.aligned !== 'justified',
            attached: this.props.attached,
            block: this.props.emphasis == 'block',
            dividing: this.props.emphasis == 'dividing',
            divider: this.props.divider, // makes a header that is also a divider
            floated: this.props.floated,
            horizontal: this.props.horizontal,
            inverted: this.props.inverted,

            // component
            header: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
