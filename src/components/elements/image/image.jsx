import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left'],
    spaced: ['right', 'left']
    // No 'size' here to avoid validateClassProps() picking it up and adding classes
};

// can't do SVG since JSX/React breaks on SVG images
export default class Image extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        centered: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        content: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(['right', 'left']),
        fluid: React.PropTypes.bool,
        shape: React.PropTypes.oneOf(['circular', 'rounded']),
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
        spaced: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['right', 'left']),
            React.PropTypes.bool
        ]),
        src: React.PropTypes.string.isRequired,
        visible: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['hidden', 'visible']),
            React.PropTypes.bool
        ])
    };

    // we don't want the ui in these circumstances
    static contextTypes = {
        isLabelChild: React.PropTypes.bool,
        isCommentsChild: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    renderComponent(other) {
        let imageDiv = (
            <img
                key="image"
                src={this.props.src} />
        );

        return React.createElement(
            this.props.component || 'div',
            other,
            [this.props.children, imageDiv]
        );
    }

    renderImg(other) {
        return (
            <img src={this.props.src}
                {...other} />
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { aligned, avatar, bordered, centered, children, className,
              component, content, defaultClasses, disabled, floated, fluid,
              shape, size, spaced, src, visible, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        // if a custom tag or a child is passed, it will always render
        // a custom tag/div
        return React.Children.count(this.props.children) > 0 || this.props.component || this.props.avatar
             ? this.renderComponent(other)
             : this.renderImg(other);
    }

    getClasses() {
        let classes = {
            // default
            // is there a use-case for an image to be content and still have the ui/image classes?
            ui: this.props.defaultClasses && !this.props.content,

            // types
            content: this.props.content,

            // states
            disabled: this.props.disabled,
            hidden: this.props.visible === 'hidden' || this.props.visible === false,
            visible: this.props.visible === 'visible' || this.props.visible === true,

            // variations
            aligned: this.props.aligned,
            avatar: this.props.avatar,
            bordered: this.props.bordered,
            centered: this.props.centered,
            circular: this.props.shape === 'circular',
            floated: this.props.floated,
            fluid: this.props.fluid,
            rounded: this.props.shape === 'rounded',
            spaced: this.props.spaced,

            // component
            image: this.props.defaultClasses && !this.props.content && this.context.isCommentsChild !== true

        };

        // string types
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
