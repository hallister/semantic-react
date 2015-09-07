import React, { Component } from 'react';
import { getChild, returnTag } from '../../utilities';
import { Segment, Content } from '../../elements';
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

    render() {
        let dimClasses = {
            ui: true,
            dimmer: true,
            transition: true,
            active: true
        };
        
        let classes = {
            // default
            dimmable: this.props.defaultClasses,
            dimmed: this.props.dimmed,

            // positioning

            // types
            blurring: this.props.blurring,
            inverted: this.props.inverted,
            page: this.props.page

            // component

            // variations
        };

        // if it's attached or animated use a div instead of a button
        let Tag = this.props.page ? React.DOM.div : <Segment />
        Tag = returnTag(this.props.tag || Tag);                   

        let { disabled, inverted, ...other } = this.props;

        let animation = {
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
            },
        };

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, [
                <Animate className={classNames(dimClasses)}
                         animation={animation}
                         key="animation"
                > 
                    {this.props.dimmed ? this.renderContent() : ''}
                </Animate>,
                this.renderChildren()
            ]
        );
    }
}