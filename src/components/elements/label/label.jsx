import React from 'react';
import PropTypes from 'prop-types';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    corner: ['left', 'right'],
    pointing: ['top', 'bottom', 'left', 'right'],
    ribbon: ['right']
};

/**
 * Label
 */
export default class Label extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A label can attach to a content segment
         */
        attached: PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),
        /**
         * A label can reduce its complexity
         */
        basic: PropTypes.bool,
        /**
         * A label can be circular
         */
        circular: PropTypes.bool,
        /**
         * A label can have different colors
         */
        color: PropTypes.string,
        /**
         * A label can position itself in the corner of an element
         */
        corner: PropTypes.oneOfType([
            PropTypes.oneOf(['left', 'right']),
            PropTypes.bool
        ]),
        /**
         * Empty label
         */
        empty: PropTypes.bool,
        /**
         * A label can float above another element
         */
        floating: PropTypes.bool,
        /**
         * A horizontal label is formatted to label content along-side it horizontally
         */
        horizontal: PropTypes.bool,

        /**
         * Add image to the label
         */
        image: PropTypes.string,
        /**
         * Format label as link (uses <a> tag)
         */
        link: PropTypes.bool,
        /**
         * A label can point to content next to it
         */
        pointing: PropTypes.oneOfType([
            PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
            PropTypes.bool
        ]),
        /**
         * A label can appear as a ribbon attaching itself to an element.
         */
        ribbon: PropTypes.oneOfType([
            PropTypes.oneOf(['right']),
            PropTypes.bool
        ]),

        /**
         * A label can be small or large
         */
        size: PropTypes.string,
        /**
         * A label can appear as a tag
         */
        tag: PropTypes.bool
    };

    static contextTypes = {
        isCardsChild: PropTypes.bool,
        isProgressChild: PropTypes.bool,
        isStatisticChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        const {
            component, children, defaultClasses, attached, basic, circular, color, corner, empty, floating,
            horizontal, image, link, pointing, ribbon, size, tag, ...other
        } = this.props;
        let Component = this.getComponent();

        other.className = classNames(other.className, this.getClasses());
        return (
            <Component {...other}>
                       {/* Add img tag if specified image */}
                       {image && <img src={image}/>}
                       {children}
            </Component>
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses && !this.context.isCardsChild && !this.context.isProgressChild && !this.context.isStatisticChild,

            // types
            attached: this.props.attached,
            corner: this.props.corner,
            floating: this.props.floating,
            image: this.props.image,
            pointing: this.props.pointing,
            ribbon: this.props.ribbon,
            tag: this.props.tag,
            basic: this.props.basic,
            horizontal: this.props.horizontal,

            // variations
            circular: this.props.circular,
            empty: this.props.empty,

            // component
            label: this.props.defaultClasses
        };

        // handle mixed string/bool this.props
        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }

    getComponent() {
        return ((this.props.link || this.props.onClick) && this.props.component === 'div') ? 'a' : this.props.component;
    }

}

