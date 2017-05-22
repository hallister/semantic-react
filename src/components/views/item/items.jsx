import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Items extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Items can be divided to better distinguish between grouped content
         */
        divided: PropTypes.bool,
        /**
         * An item can be formatted so that the entire contents link to another page
         */
        link: PropTypes.bool,
        /**
         * A group of items can relax its padding to provide more negative space
         */
        relaxed: PropTypes.relaxed
    };

    static childContextTypes = {
        isItemsChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    getChildContext() {
        return {
            isItemsChild: true
        }
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, divided, link, relaxed,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning

            // types
            divided: this.props.divided,
            relaxed: this.props.relaxed,
            link: this.props.link,

            // content

            // variations

            // component
            items: this.props.defaultClasses
        };

        return classes;
    }
}
