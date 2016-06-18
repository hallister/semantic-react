import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Motion, spring } from 'react-motion';
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
        enterAnimation: React.PropTypes.shape({
            stiffness: React.PropTypes.number,
            damping: React.PropTypes.number,
            precision: React.PropTypes.number
        }),
        /**
         * Leave animation
         */
        leaveAnimation: React.PropTypes.shape({
            stiffness: React.PropTypes.number,
            damping: React.PropTypes.number,
            precision: React.PropTypes.number
        }),
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
            stiffness: 250,
            damping: 40,
            precision: 0.1
        },
        leaveAnimation: {
            stiffness: 250,
            damping: 40,
            precision: 0.1
        },
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

    constructor(props) {
        super(props);

        this.state = {
            animating: false
        };

        this.dimmerActiveStyle = {
            display: 'block'
        };

        this.dimmerHiddenStyle = {
            display: 'none'
        };
    }

    getChildContext() {
        return {
            isDimmerChild: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            this.setState({ animating: true });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    onAnimationRest = () => {
        this.setState({ animating: false });
    };


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

        const initialStyle = other.style ? other.style : {};
        /* eslint-disable */
        const dimmerStyle = active ? this.dimmerActiveStyle :
            this.state.animating ? this.dimmerActiveStyle : this.dimmerHiddenStyle;
        /* eslint-enable */
        return (
            <Motion defaultStyle={{ opacity: active ? 1 : 0.3 }}
                    style={{ opacity: active ? spring(1, enterAnimation) : spring(0, leaveAnimation) }}
                    onRest={this.onAnimationRest}
            >
                {interpolatedStyle =>
                    <Component {...other}
                               key="dimmer"
                               style={{ ...initialStyle, ...dimmerStyle, ...interpolatedStyle }}
                    >
                        {this.renderChildren()}
                    </Component>
                }
            </Motion>
        );
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
