import React, { Component } from 'react';
import { getChild, hasChild } from '../../utilities';
import { Content, Loader } from '../../elements';
import { Animate } from '../../modules';
import classNames from 'classnames';

export class Dimmer extends Component {
    static propTypes = {
        blurring: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        page: React.PropTypes.bool
    };

    // we don't want the ui in these circumstances
    // any header/subheader under a header is a subheader
    static childContextTypes = {
        isDimmerChild: React.PropTypes.bool
    };
   
    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    getChildContext() {
        return {
            isDimmerChild: true
        };
    }

    renderChildren() {
        return getChild(this.props.children, Content);
    }

    renderContent() {
        return getChild(this.props.children, Content, false);
    }

    renderDimmer() {
        let { disabled, inverted, ...other } = this.props;

        return React.createElement(
            this.props.component,
            other, 
            [
                <Animate 
                    animation={this.getAnimation()}
                    className={classNames(this.getDimmerClasses())}
                    key="animation"
                > 
                    {this.props.dimmed ? this.renderContent() : ''}
                </Animate>,
                this.renderChildren()
            ]
        );
    }

    renderLoader() {
        let { disabled, inverted, ...other } = this.props;

        other.className = classNames(
            this.props.className, 
            this.props.inverted ? 'inverted' : '', 
            this.getDimmerClasses()
        );

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    render() { 
        if (hasChild(this.props.children, Loader)) {
            return this.renderLoader();
        } else {
            return this.renderDimmer();
        }
    }

    getAnimation() {
        return {
            state: this.props.dimmed,
            enterState: {
                name: 'fadeIn',
                ease: 'cubic-out',
                duration: 250
            },
            exitState: {
                name: 'fadeOut',
                ease: 'cubic-out',
                duration: 300
            }
        };
    }

    getClasses() {
        let classes = {
            // default
            dimmable: this.props.defaultClasses,
            dimmed: this.props.dimmed,

            // positioning

            // types
            inverted: this.props.inverted,
            blurring: this.props.blurring,
            page: this.props.page

            // component

            // variations
        };

        return classes;
    }

    getDimmerClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            active: this.props.defaultClasses,
            dimmer: this.props.defaultClasses
        }

        return classes;
    }
}