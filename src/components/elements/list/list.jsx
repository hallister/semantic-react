import React from 'react';
import PropTypes from 'prop-types';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

export default class List extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Controls content alignment for all items in list
         */
        aligned: PropTypes.oneOf(['top', 'middle', 'bottom']),
        /**
         * A list can animate to set the current item apart from the list
         */
        animated: PropTypes.bool,
        /**
         * Cell type
         */
        celled: PropTypes.oneOfType([
            PropTypes.oneOf(['divided']),
            PropTypes.bool
        ]),
        /**
         * Controls content floating for all items in list
         */
        floated: PropTypes.oneOf(['right', 'left']),
        /**
         * A list can be formatted to have items appear horizontally
         */
        horizontal: PropTypes.bool,
        /**
         * A list can be inverted to appear on a dark background
         */
        inverted: PropTypes.bool,
        /**
         * A list can be specially formatted for navigation links
         */
        link: PropTypes.bool,
        /**
         * A list can relax its padding to provide more negative space
         */
        relaxed: PropTypes.bool,
        /**
         * A selection list formats list items as possible choices
         */
        selection: PropTypes.bool,
        /**
         * A list can vary in size
         */
        size: PropTypes.string,
        /**
         * Type of the list
         * Bulleted: mark items with a bullet
         * Ordered: mark items with a number
         */
        type: PropTypes.oneOf(['bulleted', 'ordered'])
    };

    static contextTypes = {
        isListChild: PropTypes.bool
    };

    static childContextTypes = {
        isListChild: PropTypes.bool,
        isLinkList: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    getChildContext() {
        return {
            isListChild: true,
            isLinkList: this.props.link
        }
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, aligned, animated, celled, floated, horizontal,
              inverted, link, relaxed, selection, size, type,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}/>
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses && !this.context.isListChild,

            // types
            bulleted: this.props.type === 'bulleted',
            horizontal: this.props.horizontal,
            link: this.props.link,
            ordered: this.props.type === 'ordered',

            // variations
            animated: this.props.animated,
            celled: this.props.celled && this.props.celled !== 'divided',
            divided: this.props.celled === 'divided',
            inverted: this.props.inverted,
            relaxed: this.props.relaxed,
            selection: this.props.selection,
            aligned: this.props.aligned,

            // component
            list: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
