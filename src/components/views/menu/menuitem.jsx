import React from 'react';
import classNames from 'classnames';
import { Item } from '../item/item';


/**
 * Menu/Dropdown item
 */
let MenuItem = ({ active, color, value, onClick, ...other }) => {
    let classes = {
        active: active
    };
    if (color) {
        classes[color] = !!color;
    }
    other.className = classNames(other.className, classes);
    
    return (<Item {...other} 
            data-value={value}
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
     * On menu option click callback. Usually you shouldn't use it and lever on Menu callbacks instead
     */
    onClick: React.PropTypes.func,
    /**
     * Item value
     */
    value: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ])
};

MenuItem.defaultProps = {
    ...Item.defaultProps
};

export { MenuItem }
