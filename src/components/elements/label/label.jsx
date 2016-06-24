import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
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
export default class Label extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A label can attach to a content segment
         */
        attached: React.PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),
        /**
         * A label can reduce its complexity
         */
        basic: React.PropTypes.bool,
        /**
         * A label can be circular
         */
        circular: React.PropTypes.bool,
        /**
         * A label can have different colors
         */
        color: React.PropTypes.string,
        /**
         * A label can position itself in the corner of an element
         */
        corner: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['left', 'right']),
            React.PropTypes.bool
        ]),
        /**
         * Empty label
         */
        empty: React.PropTypes.bool,
        /**
         * A label can float above another element
         */
        floating: React.PropTypes.bool,
        /**
         * A horizontal label is formatted to label content along-side it horizontally
         */
        horizontal: React.PropTypes.bool,

        /**
         * Add image to the label
         */
        image: React.PropTypes.string,
        /**
         * Format label as link (uses <a> tag)
         */
        link: React.PropTypes.bool,
        /**
         * A label can point to content next to it
         */
        pointing: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
            React.PropTypes.bool
        ]),
        /**
         * A label can appear as a ribbon attaching itself to an element.
         */
        ribbon: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['right']),
            React.PropTypes.bool
        ]),

        /**
         * A label can be small or large
         */
        size: React.PropTypes.string,
        /**
         * A label can appear as a tag
         */
        tag: React.PropTypes.bool
    };

    static contextTypes = {
        isCardsChild: React.PropTypes.bool,
        isProgressChild: React.PropTypes.bool,
        isStatisticChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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

