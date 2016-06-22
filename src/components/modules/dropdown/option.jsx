import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import MenuItem from './../../views/menu/menuitem';

/**
 * Select option. This should be used in <Select>
 */
export default class Option extends React.Component {
    static propTypes = {
        ...MenuItem.propTypes,
        /**
         * Option value
         */
        value: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.string
        ]).isRequired
    };

    static defaultProps = {
        ...MenuItem.defaultProps
    };

    /* eslint-disable */
    static Components = {
        MenuItem: MenuItem
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        const { children, value, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        if (other.active) {
            other.className = classNames(other.className, { selected: true });
        }
        return (
            <Option.Components.MenuItem
                menuValue={value}
                {...other}
            >
                {children}
            </Option.Components.MenuItem>
        )
    }
}
