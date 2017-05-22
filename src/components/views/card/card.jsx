import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Card extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        centered: PropTypes.bool,
        col: PropTypes.string,
        color: PropTypes.string,
        doubling: PropTypes.string,
        fluid: PropTypes.bool,
        link: PropTypes.bool,
        onClick: PropTypes.func
    };

    static contextTypes = {
        isCardChild: PropTypes.bool
    };

    static childContextTypes = {
        isCardChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    getChildContext() {
        return {
            isCardChild: true
        }
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, centered, col, color, doubling, fluid, link, ...other } = this.props;
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
            ui: this.props.defaultClasses  && !this.context.isChildCard,


            // component
            card: this.props.defaultClasses,

            // variations
            centered: this.props.centered,
            doubling: this.props.doubling,
            color: this.props.color,
            fluid: this.props.fluid,
            link: this.props.link || this.props.onClick
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.col] = !!this.props.col;
        classes[this.props.doubling] = !!this.props.doubling;

        return classes;
    }
}
