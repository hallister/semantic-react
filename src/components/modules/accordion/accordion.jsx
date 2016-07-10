import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Controlled accordion
 */
export default class Accordion extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Pass false to disable animation
         */
        animating: React.PropTypes.bool,
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
    };

    static contextTypes = {
        isAccordionChild: React.PropTypes.bool
    };

    static childContextTypes = {
        isAccordionChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        animating: true,
        activeIndexes: [],
        onAccordionChange: () => { }
    };

    constructor(props) {
        super(props);

        // Disallow to override animation style for now, since paddingTop and paddingBottom need to be animated too
        // I don't want to bother with dealing with unit measures for now, so just hardcode semantic EM values here and in body component
        // this.enterAnimation = {
        //     height: {
        //         val: 'auto',
        //         stiffness: 300,
        //         damping: 40,
        //         precision: 0.1
        //     },
        //     paddingTop: {
        //         val: 0.5,
        //         stiffness: 300,
        //         damping: 40,
        //         precision: 0.2
        //     }
        // };
        // this.enterAnimation.paddingBottom = {
        //     val: (props.styled) ? 1.5 : 1,
        //     stiffness: 300,
        //     damping: 40,
        //     precision: 0.3
        // }
        // this.enterAnimation.paddingBottom = (props.styled) ? 1.5 : 1; // em
        // this.enterAnimation.paddingBottom = 1.0; // em
        // this.leaveAnimation = {
        //     height: 0,
        //     paddingTop: 0,
        //     paddingBottom: 0
        // }
    }

    getChildContext() {
        return {
            isAccordionChild: true
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    /**
     * Accordion title click handler
     *
     * @param {number|string} index Index
     */
    onAccordionTitleClick = (index) => {
        this.props.onAccordionChange(index);
    }

    /**
     * Process children. Skips non active content
     */
    renderChildren() {
        // not using child.type checking because these will fail if using some kind of HOC component
        const arrayChildren = React.Children.toArray(this.props.children);
        const newChild = [];
        for (let index = 0; index < arrayChildren.length; index++) {
            const child = arrayChildren[index];
            if (child.props.index) {
                let active = false;
                // This is accordion title
                if (this.props.activeIndexes.indexOf(child.props.index) !== -1) {
                    // It should be active
                    active = true;
                }
                newChild.push(React.cloneElement(child, {
                    active: active,
                    key: child.key ? child.key : child.props.index,
                    onClick: this.onAccordionTitleClick
                }));
                const body = arrayChildren[index + 1];
                if (body) {
                    newChild.push(
                        React.cloneElement(body, {
                            active: active,
                            key: body.key ? body.key : `content-${child.props.index}`,
                            styled: this.props.styled,
                            animating: this.props.animating
                        })
                    );
                    // skip next element
                    index++;
                }
            }
        }
        return newChild;
    }

    render() {
        const {
            animating, component, children, defaultClasses, activeIndexes, fluid, inverted,
            onAccordionChange, styled, enterAnimation, leaveAnimation, style, ...other
        } = this.props;
        const Component = component;

        other.className = classNames(other.className, this.getClasses());

        return (
            <Component {...other}>
                {this.renderChildren()}
            </Component>
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
