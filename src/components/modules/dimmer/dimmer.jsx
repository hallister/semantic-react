import React from 'react';
import SemanticCSSTransitionGroup from '../../animation/animation';
import classNames from 'classnames';
import { hasChild } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Content from './../../elements/simple/content';
import Loader from './../../elements/loader/loader';

/**
 * Dimmer
 */
export default class Dimmer extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        ...SemanticCSSTransitionGroup.propTypes,
        /**
         * Hide/Display dimmer
         */
        active: React.PropTypes.bool,
        /**
         * Page dimmer. Doesn't require dimmable section
         */
        page: React.PropTypes.bool,
        /**
         * Inverted dimmer
         */
        inverted: React.PropTypes.bool,
        /**
         * Disables auto-wrapping child contents into <Content>
         */
        noWrapChildren: React.PropTypes.bool,
        /**
         * internal
         */
        closePortal: React.PropTypes.func
    };

    
    // This forces <Content> to add a centered div below it.
    static childContextTypes = {
        isDimmerChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        enterDuration: 500,
        leaveDuration: 300,
        enter: 'fade in',
        leave: 'fade out',
        active: false,
        page: false,
        inverted: false,
        noWrapChildren: false
    };

    /* eslint-disable */
    static Components = {
        Content: Content,
        Loader: Loader
    };
    /* eslint-enable */

    getChildContext() {
        return {
            isDimmerChild: true
        };
    }

    /**
     * Render dimmer children
     */
    renderChildren() {
        const { children, noWrapChildren } = this.props;
        if (noWrapChildren) {
            return children;
        } else {
            return (hasChild(children, Dimmer.Components.Loader)) ? children : <Dimmer.Components.Content>{children}</Dimmer.Components.Content>;
        }
    }

    render() {
        // Note: Need to consume closePortal since dimmer could be called from portal-ed components (modal/popup)
        /* eslint-disable no-use-before-define */
        const {
            active, children, component, defaultClasses, enterDuration, leaveDuration, enter, leave,
            page, inverted, noWrapChildren, closePortal, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        const Component = component;
        other.className = classNames(other.className, this.getClasses());

        return (
            <SemanticCSSTransitionGroup
                enter={enter}
                leave={leave}
                enterDuration={enterDuration}
                leaveDuration={leaveDuration}
            >
                {active &&
                    <Component {...other}
                        key="dimmer"
                    >
                        {this.renderChildren()}
                    </Component>
                }
            </SemanticCSSTransitionGroup>
        );
    }
    
    getClasses() {
        return {
            ui: this.props.defaultClasses,
            active: this.props.active,
            page: this.props.page,
            inverted: this.props.inverted,
            dimmer: this.props.defaultClasses
        };
    }
}
