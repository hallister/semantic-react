import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Tab from './tab';
import TabTitle from './tabtitle';
import Item from './../../views/item/item';
import DefaultProps from '../../defaultProps';

export default class Tabs extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        position: React.PropTypes.oneOf([
            'top',
            'bottom'
        ]),
        type: React.PropTypes.oneOf([
            'tab',
            'menu',
            'pill'
        ])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        type: 'tab'
    };

    /* eslint-disable */
    static Components = {
        Tab: Tab,
        TabTitle: TabTitle,
        Item: Item
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        this.state = {
            active: 0
        }
    }

    componentDidMount() {
        this.setActiveChild();
    }

    componentWillReceiveProps() {
        this.setActiveChild();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }


    onItemClick(index) {
        this.setState({
            active: index
        });
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child, index) => {
            if (child.type === Tabs.Components.Tab) {
                return React.cloneElement(
                    child,
                    {
                        active: this.state.active === index,
                        type: this.props.type
                    },
                    child.props.children
                );
            }
        });
    }

    renderTitles() {
        let tabs = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (child.type == Tabs.Components.Tab) {
                let props = {};

                props.active = this.state.active === index;
                props.key = index;
                props.onClick = this.onItemClick.bind(this, index);

                tabs.push(
                    React.createElement(
                        Tabs.Components.Item,
                        props,
                        child.props.header
                    )
                );
            }
        });

        return (
            <Tabs.Components.TabTitle
                key="titles"
                type={this.props.type}
            >
                {tabs}
            </Tabs.Components.TabTitle>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, position, type,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        return React.createElement(
            this.props.component,
            other,
            [
                this.renderTitles(),
                this.renderChildren()
            ]
        );
    }

    setActiveChild() {
        React.Children.forEach(this.props.children, (child, index) => {
            if (child.type === Tabs.Components.Tab && child.props.active) {
                this.setState({
                    active: index
                })
            }
        });
    }
}
