import React from 'react';
import classNames from 'classnames';
import { Item } from '../item/item';


/**
 * Menu/Dropdown item
 */
let MenuItem = ({ active, color, menuValue, ...other }) => {
    let classes = {
        active: active
    };
    if (color) {
        classes[color] = !!color;
    }
    other.className = classNames(other.className, classes);
    
    return (<Item {...other} 
            data-value={menuValue}
            link />
    );
    
};

MenuItem.propTypes = {
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
    ])
};

MenuItem.defaultProps = {
    ...Item.defaultProps
};

export { MenuItem }
