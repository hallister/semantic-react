import React from 'react';
import classNames from 'classnames';
import Menu from '../../views/menu/menu';

export default class TabMenu extends React.PureComponent {
    static propTypes = {
        ...Menu.propTypes
    };

    static defaultProps = {
        ...Menu.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Menu: Menu
    }
    /* eslint-enable */

    render() {
        const { children, ...other } = this.props;
        other.className = classNames(other.className, this.getClasses());
        return (
            <TabMenu.Components.Menu {...other} attached="top">
                {children}
            </TabMenu.Components.Menu>
        );
    }

    getClasses() {
        return {
            tabular: true
        };
    }
}
