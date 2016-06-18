import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Item from '../item/item';

/**
 * Menu/Dropdown item
 */
export default class MenuItem extends React.Component {
    static propTypes = {
        ...Item.propTypes,
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
        ...Item.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Item: Item
    };
    /* eslint-enable */

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
        const { active, color, menuValue, ...other } = this.props;
        const classes = {
            active: active
        };
        if (color) {
            classes[color] = !!color;
        }
        other.className = classNames(other.className, classes);

        return (<MenuItem.Components.Item {...other}
                                          onClick={this.onClick}
                                          data-value={menuValue}
                                          link />
        );
    }
}
