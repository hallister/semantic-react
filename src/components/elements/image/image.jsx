import React, { Component } from 'react';
import { childCount, returnTag } from '../../utilities';
import classNames from 'classnames';

// can't do SVG since JSX/React breaks on SVG images
export class Image extends Component {
    static propTypes = {
        aligned: React.PropTypes.string,
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        centered: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
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
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        visibile: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    renderTag(classes, other) {

        let Tag = returnTag(this.props.tag || React.DOM.div);
        let imageDiv = <img key="image"
                            src={this.props.src} />;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, [this.props.children, imageDiv]);
    }

    renderImg(classes, other) {
        return (
            <img 
                className={classNames(this.props.className, classes)}
                src={this.props.src} 
                {...other}
            />
        );
    }

    render() {
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

        let { aligned, avatar, bordered, centered, children, circular, className, content,
              defaultClasses, disabled, floated, fluid, hidden, rounded, size, spaced, 
              src, visible, ...other } = this.props;

        // if a custom tag or a child is passed, it will always render
        // a custom tag/div
        return childCount(this.props.children) > 0 || this.props.tag 
             ? this.renderTag(classes, other) 
             : this.renderImg(classes, other);
    }

}