import React from 'react';
import classNames from 'classnames';

// can't do SVG since JSX/React breaks on SVG images
export class Image extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.string,
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        centered: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        content: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.string,
        fluid: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        size: React.PropTypes.string,
        spaced: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        src: React.PropTypes.string.isRequired,
        visibile: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    renderComponent(other) {
        let imageDiv = <img key="image"
                            src={this.props.src} />;

        return React.createElement(
            this.props.component,
            other,
            [this.props.children, imageDiv]
        );
    }

    renderImg(other) {
        return (
            <img src={this.props.src} 
                {...other}
            />
        );
    }

    render() {
        let { aligned, avatar, bordered, centered, children, circular, className, content,
              defaultClasses, disabled, floated, fluid, hidden, rounded, size, spaced, 
              src, visible, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        // if a custom tag or a child is passed, it will always render
        // a custom tag/div
        return React.Children.count(this.props.children) > 0 || this.props.component 
             ? this.renderComponent(other) 
             : this.renderImg(other);
    }

    getClasses() {
        let classes = {
            // default
            // is there a usecase for an image to be content and still have the ui/image classes?
            ui: this.props.defaultClasses && !this.props.content,

            // positioning
            right: false,
            left: false,

            // types
            content: this.props.content,

            // states
            disabled: this.props.disabled,
            hidden: this.props.hidden,
            visible: this.props.visible,

            // variations
            aligned: this.props.aligned,
            avatar: this.props.avatar,
            bordered: this.props.bordered,       
            centered: this.props.centered,                
            circular: this.props.circular,
            floated: this.props.floated,
            fluid: this.props.fluid,
            rounded: this.props.rounded,
            spaced: this.props.spaced,

            // component
            image: this.props.defaultClasses && !this.props.content

        };

        classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.floated] = !!this.props.floated;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.spaced] = !!this.props.spaced;

        return classes;
    }

}