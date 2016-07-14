import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Menu from '../../views/menu/menu';

export default class TabMenu extends React.Component {
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

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
