import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

// can't do SVG since JSX/React doesn't allow for it

export class Image extends Component {
    static defaultProps = {
        aligned: "",
        defaultClasses: true,
        floated: "",
        size: "",
        spaced: false
    };

    static propTypes = {
        aligned: React.PropTypes.string,
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        centered: React.PropTypes.bool,
        content: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.string,
        fluid: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        visibile: React.PropTypes.bool,
        size: React.PropTypes.string,
        spaced: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        src: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    renderDiv(classes) {
        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
                <img src={this.props.src}/>
            </div>
        )
    }

    renderImg(classes) {
        return (
            <img src={this.props.src} className={classNames(this.props.className, classes)}/>
        )
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
            image: this.props.defaultClasses && !this.props.content,

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
            spaced: this.props.spaced
        };

        classes[this.props.aligned] = this.props.aligned ? true : false;
        classes[this.props.floated] = this.props.floated ? true : false;
        classes[this.props.size] = this.props.size ? true : false;
        classes[this.props.spaced] = this.props.spaced ? true : false;

        return React.Children.count(this.props.children) > 0 ? this.renderDiv(classes) : this.renderImg(classes);
    }

}