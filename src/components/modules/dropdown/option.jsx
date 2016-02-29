import React from 'react';
import classNames from 'classnames';
import { MenuItem } from '../../views/menu/menuitem';

/**
 * Select dropdown option
 */
export class Option extends React.Component {
    static propTypes = {
        ...MenuItem.propTypes,
        children: React.PropTypes.node,
        value: React.PropTypes.string.isRequired
    };

    render() {
        /* eslint-disable */
        if (this.props.active) {
            this.props.className = classNames(this.props.className, {selected: true});
        }
        /* eslint-enable */
        return (
            <MenuItem
                {...this.props}
            >
                {this.props.children}
            </MenuItem>
        );
    }
}
