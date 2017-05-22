import React from 'react';
import PropTypes from 'prop-types';
import SemanticCSSTransition from '../../animation/animation';
import AnimationProps from '../../animation/animationProps';
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
        ...AnimationProps.propTypes,
        /**
         * Hide/Display dimmer
         */
        active: PropTypes.bool,
        /**
         * Page dimmer. Doesn't require dimmable section
         */
        page: PropTypes.bool,
        /**
         * Inverted dimmer
         */
        inverted: PropTypes.bool,
        /**
         * Disables auto-wrapping child contents into <Content>
         */
        noWrapChildren: PropTypes.bool,
        /**
         * internal
         */
        closePortal: PropTypes.func
    };

    
    // This forces <Content> to add a centered div below it.
    static childContextTypes = {
        isDimmerChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        ...AnimationProps.defaultProps,
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
    
    componentDidMount() {
        const { active, page } = this.props;
        if (active && page) {
            document.body.classList.add('dimmable', 'dimmed');
        }
    }
    
    componentDidUpdate() {
        const { active, page } = this.props;
        if (active && page) {
            document.body.classList.add('dimmable', 'dimmed');
        }
    }
    
    componentWillUnmount() {
        const { page } = this.props;
        if (page) {
            document.body.classList.remove('dimmable', 'dimmed');
        }
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
            <SemanticCSSTransition
                enter={enter}
                leave={leave}
                enterDuration={enterDuration}
                leaveDuration={leaveDuration}
                runOnMount
            >
                {active &&
                    <Component {...other}
                        key="dimmer"
                    >
                        {this.renderChildren()}
                    </Component>
                }
            </SemanticCSSTransition>
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
