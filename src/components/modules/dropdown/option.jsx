import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from './../../views/menu/menuitem';

/**
 * Select option. This should be used in <Select>
 */
export default class Option extends React.PureComponent {
    static propTypes = {
        ...MenuItem.propTypes,
        /**
         * Option value
         */
        value: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
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
