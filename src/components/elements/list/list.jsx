import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

export default class List extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Controls content alignment for all items in list
         */
        aligned: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
        /**
         * A list can animate to set the current item apart from the list
         */
        animated: React.PropTypes.bool,
        /**
         * Cell type
         */
        celled: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['divided']),
            React.PropTypes.bool
        ]),
        /**
         * Controls content floating for all items in list
         */
        floated: React.PropTypes.oneOf(['right', 'left']),
        /**
         * A list can be formatted to have items appear horizontally
         */
        horizontal: React.PropTypes.bool,
        /**
         * A list can be inverted to appear on a dark background
         */
        inverted: React.PropTypes.bool,
        /**
         * A list can be specially formatted for navigation links
         */
        link: React.PropTypes.bool,
        /**
         * A list can relax its padding to provide more negative space
         */
        relaxed: React.PropTypes.bool,
        /**
         * A selection list formats list items as possible choices
         */
        selection: React.PropTypes.bool,
        /**
         * A list can vary in size
         */
        size: React.PropTypes.string,
        /**
         * Type of the list
         * Bulleted: mark items with a bullet
         * Ordered: mark items with a number
         */
        type: React.PropTypes.oneOf(['bulleted', 'ordered'])
    };

    static contextTypes = {
        isListChild: React.PropTypes.bool
    };

    static childContextTypes = {
        isListChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    getChildContext() {
        return {
            isListChild: true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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
