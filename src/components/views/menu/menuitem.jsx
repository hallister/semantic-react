import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Menu/Dropdown item
 */
export default class MenuItem extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Is item active
         */
        active: React.PropTypes.bool,
        /**
         * Item color
         */
        color: React.PropTypes.string,
        /**
         * Item value (used in controlled menu)
         */
        menuValue: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.string
        ]).isRequired
    };
    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    onClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const { onClick, menuValue } = this.props;
        if (onClick) onClick(menuValue);
    };

    render() {
        const { component, children, defaultClasses, active, color, menuValue, ...other } = this.props;
        other.className = classNames(other.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}
                       onClick={this.onClick}
                       data-value={menuValue}
            >
                {children}
            </Component>
        )
    }

    getClasses() {
        const classes = {
            // variations
            active: this.props.active,
            link: this.props.defaultClasses,
            // component
            item: this.props.defaultClasses
        };
        classes[this.props.color] = !!this.props.color;
        return classes;
    }
}
