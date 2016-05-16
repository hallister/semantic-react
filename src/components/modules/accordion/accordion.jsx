import React from 'react';
import classNames from 'classnames';
import Transition from 'react-motion-ui-pack';
import DefaultProps from '../../defaultProps';

/**
 * Controlled accordion
 */
export default class Accordion extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Current visible content. Strings and numbers are accepted
         */
        activeIndexes: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])),
        /**
         * React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]))
         */
        fluid: React.PropTypes.bool,
        /**
         * An accordion can be formatted to appear on dark backgrounds
         */
        inverted: React.PropTypes.bool,
        /**
         * Callback when accordion wants to be changed
         */
        onAccordionChange: React.PropTypes.func,
        /**
         * A styled accordion adds basic formatting
         */
        styled: React.PropTypes.bool,
        /**
         * Enter animations transforms
         */
        enterAnimation: React.PropTypes.object,
        /**
         * Leave animation
         */
        leaveAnimation: React.PropTypes.object
    };

    static contextTypes = {
        isAccordionChild: React.PropTypes.bool
    };
    
    static childContextTypes = {
        isAccordionChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        activeIndexes: [],
        onAccordionChange: () => { }
    };

    constructor(props) {
        super(props);

        // Disallow to override animation style for now, since paddingTop and paddingBottom need to be animated too
        // I don't want to bother with dealing with unit measures for now, so just hardcode semantic EM values here and in body component
        this.enterAnimation = {
            height: {
                val: 'auto',
                stiffness: 300,
                damping: 40,
                precision: 0.1
            },
            paddingTop: {
                val: 0.5,
                stiffness: 300,
                damping: 40,
                precision: 0.2
            }
        };
        this.enterAnimation.paddingBottom = {
            val: (props.styled) ? 1.5 : 1,
            stiffness: 300,
            damping: 40,
            precision: 0.3
        }
        // this.enterAnimation.paddingBottom = (props.styled) ? 1.5 : 1; // em
        // this.enterAnimation.paddingBottom = 1.0; // em
        this.leaveAnimation = {
            height: 0,
            paddingTop: 0,
            paddingBottom: 0
        }
    }

    getChildContext() {
        return {
            isAccordionChild: true
        };
    }

    /**
     * Accordion title click handler
     * 
     * @param {number|string} index Index
     * @param {React.MouseEvent} evt Mouse event
     */
    onAccordionTitleClick(index, evt) {
        evt.preventDefault();
        this.props.onAccordionChange(index);
    }

    /**
     * Process children. Skips non active content
     * 
     * @returns Children
     */
    renderChildren() {
        let processNextContentChild = false;
        let lastActiveIndex = null;

        // not using child.type checking because these will fail if using some kind of HOC component
        return React.Children.map(this.props.children, (child => {
            if (child.props.index) {
                // This is accordion title
                let active = false;
                if (this.props.activeIndexes.indexOf(child.props.index) !== -1) {
                    // It should be active
                    // set processing flags
                    processNextContentChild = true;
                    lastActiveIndex = child.props.index;
                    active = true;
                }
                return React.cloneElement(child, {
                    active: active,
                    key: child.key ? child.key : child.props.index,
                    initialStyle: child.props.style, // Set original passed style, component will use it instead of style
                    onClick: this.onAccordionTitleClick.bind(this, child.props.index)
                });
            } else if (processNextContentChild && lastActiveIndex !== null) {
                // reset index flag
                lastActiveIndex = null;
                // reset processing flag
                processNextContentChild = false;
                return React.cloneElement(child, {
                    active: true,
                    key: child.key ? child.key : `content-${lastActiveIndex}`,
                    style: { ...child.props.style, overflow: 'hidden' }
                });
            }
        }));
    }

    render() {
        const {
            component, children, defaultClasses, activeIndexes, fluid, inverted,
            onAccordionChange, styled, enterAnimation, leaveAnimation, ...other
        } = this.props;
        const newChildren = this.renderChildren();

        other.className = classNames(other.className, this.getClasses());

        return (
            <Transition component={component}
                enter={enterAnimation || this.enterAnimation}
                leave={leaveAnimation || this.leaveAnimation}
                { ...other }
            >
                {newChildren}
            </Transition>
        )
    }

    getClasses() {
        return {
            // default
            ui: this.props.defaultClasses && !this.context.isAccordionChild,

            // positioning

            // types
            styled: this.props.styled,

            // variations
            fluid: this.props.fluid,
            inverted: this.props.inverted,

            // component
            accordion: this.props.defaultClasses
        }
    }
}
