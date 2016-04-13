import React from 'react';
import Transition from 'react-motion-ui-pack';
import classNames from 'classnames';
import { hasChild } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Content from './../../elements/simple/content';
import Loader from './../../elements/loader/loader';

export default class Dimmer extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Hide/Display dimmer
         */
        active: React.PropTypes.bool,
        /**
         * Enter animation
         */
        enterAnimation: React.PropTypes.object,
        /**
         * Leave animation
         */
        leaveAnimation: React.PropTypes.object,
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
        noWrapChildren: React.PropTypes.bool
    };

    
    // This forces <Content> to add a centered div below it.
    static childContextTypes = {
        isDimmerChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        active: false,
        enterAnimation: {
            opacity: 1
        },
        leaveAnimation: {
            opacity: 0
        },
        page: false,
        inverted: false,
        noWrapChildren: false
    };

    /* eslint-disable */
    static Components = {
        Content: Content,
        Loader: Loader
    }
    /* eslint-enable */
    
    getChildContext() {
        return {
            isDimmerChild: true
        };
    }

    renderChildren() {
        const { children, noWrapChildren } = this.props;
        if (noWrapChildren) {
            return children;
        } else {
            return (hasChild(children, Dimmer.Components.Loader)) ? children : <Dimmer.Components.Content>{children}</Dimmer.Components.Content>;
        }
    }
    
    render() {
        /* eslint-disable no-use-before-define */
        let { active, children, component, enterAnimation, leaveAnimation, page, inverted, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        
        let Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (
            <Transition component={false}
                        enter={enterAnimation}
                        leave={leaveAnimation}
            >
                {active &&
                    <Component {...other}
                        key="dimmer"
                    >
                    {this.renderChildren()}
                    </Component>
                }
            </Transition>
        )
    }
    
    getClasses() {
        return {
            ui: this.props.defaultClasses,
            dimmer: this.props.defaultClasses,
            active: this.props.active,
            page: this.props.page,
            inverted: this.props.inverted
        };
    }
}
