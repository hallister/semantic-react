import React from 'react';
import classNames from 'classnames';
import { MenuItem } from '../../views';

/**
 * Select option. This should be used in <Select>
 */
let Option = (props) => {
    /* eslint-disable no-use-before-define */
    const { children, value, ...other } = props;
    /* eslint-enable no-use-before-define */
    if (other.active) {
        other.className = classNames(other.className, { selected: true });
    }
    return (
        <MenuItem 
            menuValue={value}
            {...other} 
        >
            {children}
        </MenuItem>
    )
};

Option.propTypes = {
    ...MenuItem.propTypes,
    /**
     * Option value
     */
    value: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]).isRequired
};

Option.defaultProps = {
    ...MenuItem.defaultProps
};

export default Option;