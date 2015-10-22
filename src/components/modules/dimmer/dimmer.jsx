import React, { Component } from 'react';
import { getChild, hasChild } from '../../utilities';
import { Content, Loader, Segment } from '../../elements';
import { Animations, Dimmable } from '../../modules';
import classNames from 'classnames';

export class Dimmer extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        blurring: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        page: React.PropTypes.bool
    };

    // This forces <Content> to add a centered div below it.
    static childContextTypes = {
        isDimmerChild: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true,
        basic: true,
        page: false
    };

    constructor(props) {
        super(props);

        this.enter = {
            ease: 'swing',
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        }

        this.leave = {
            ease: 'swing',
            from: {
                opacity: 1
            },
            to: {
                opacity: 0
            }
        }
    }

    getChildContext() {
        return {
            isDimmerChild: true
        };
    }

    // IE 10+
    componentWillMount() {
        if (this.props.page) {
            document.body.classList.add('dimmable');
        }
    }

    // IE 10+
    componentWillUnmount() {
        if (this.props.page) {
            document.body.classList.remove('dimmable');
        }
    }

    renderChildren() {
        return getChild(this.props.children, Content);
    }

    renderContent() {
        return getChild(this.props.children, Content, false);
    }

    renderDimmer() {
        let { component, disabled, inverted, ...other } = this.props;

        let dimmerChildren = [];

        if (this.props.active) {
            dimmerChildren.push(
                <Dimmable
                    enter={this.enter}
                    key="animation"
                    leave={this.leave}
                    page={this.props.page}
                >
                    {this.renderContent()}
                </Dimmable>
            );
        }

        Array.prototype.push.apply(dimmerChildren, this.renderChildren());

        other.className = classNames(this.getClasses());
        other.component = Segment;

        return React.createElement(
            Animations,
            other,
            dimmerChildren
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
            state: this.props.active,
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
            dimmed: this.props.active,

            // positioning

            // types
            inverted: this.props.inverted,
            blurring: this.props.blurring

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
