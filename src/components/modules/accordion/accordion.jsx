import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Controlled accordion
 */
export default class Accordion extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Pass false to disable animation
         */
        animating: PropTypes.bool,
        /**
         * Current visible content. Strings and numbers are accepted
         */
        activeIndexes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
        /**
         * PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
         */
        fluid: PropTypes.bool,
        /**
         * An accordion can be formatted to appear on dark backgrounds
         */
        inverted: PropTypes.bool,
        /**
         * Callback when accordion wants to be changed
         */
        onAccordionChange: PropTypes.func,
        /**
         * A styled accordion adds basic formatting
         */
        styled: PropTypes.bool
    };

    static contextTypes = {
        isAccordionChild: PropTypes.bool
    };

    static childContextTypes = {
        isAccordionChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        activeIndexes: [],
        onAccordionChange: () => { }
    };

    getChildContext() {
        return {
            isAccordionChild: true
        };
    }


    /**
     * Accordion title click handler
     *
     * @param {number|string} index Index
     */
    onAccordionTitleClick = (index) => {
        this.props.onAccordionChange(index);
    };

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
                            styled: this.props.styled
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
            onAccordionChange, styled, enterAnimation, leaveAnimation, ...other
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
