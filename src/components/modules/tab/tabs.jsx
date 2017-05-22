import React from 'react';
import PropTypes from 'prop-types';
import DefaultProps from '../../defaultProps';
import TabMenu from './tabmenu';
import Tab from './tab';

export default class Tabs extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Active tab value
         */
        activeTab: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        /**
         * Current tab want's to be changed
         */
        onTabChange: PropTypes.func
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        onTabChange: () => {}
    };

    /* eslint-disable */
    static Components = {
        TabMenu: TabMenu,
        Tab: Tab
    };
    /* eslint-enable */

    onMenuChange = (value) => {
        const { onTabChange, activeTab } = this.props;
        if (value && value !== activeTab) {
            onTabChange(value);
        }
    }

    renderMenu() {
        const { activeTab } = this.props;
        // Menu should be first element
        const children = React.Children.toArray(this.props.children).shift();
        if (children && children.type === Tabs.Components.TabMenu) {
            return React.cloneElement(children, {
                menuValue: activeTab,
                onMenuChange: this.onMenuChange
            });
        }
        return null;
    }

    renderTabs() {
        const { children, activeTab } = this.props;
        const childrenWithoutMenu = React.Children.toArray(children);
        childrenWithoutMenu.shift();

        return childrenWithoutMenu.map(child => {
            if (!child || child.type !== Tabs.Components.Tab) {
                return null;
            }

            return React.cloneElement(child, {
                key: child.key ? child.key : child.props.value,
                active: child.props.value === activeTab
            });
        })
    }

    render() {
        const { component, defaultClasses, children, activeTab, onTabChange, ...other } = this.props;
        const Component = component;

        return (
            <Component {...other}>
                {this.renderMenu()}
                {this.renderTabs()}
            </Component>
        );
    }
}
