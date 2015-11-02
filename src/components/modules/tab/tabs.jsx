import React from 'react';
import { Tab } from './tab';
import { TabTitle } from './tabtitle';
import { Item } from '../../views';

export class Tabs extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
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
        component: 'div',
        type: 'tab'
    };

    constructor(props) {
        super(props);

        this.state = {
            active: 0
        }
    }

    componentDidMount() {
        React.Children.forEach(this.props.children, (child, index) => {
            if (child.type === Tab && child.props.active) {
                /* eslint-disable react/no-did-mount-set-state */
                this.setState({
                    active: index
                })
            }
        });
    }

    onItemClick(index) {
        this.setState({
            active: index
        });
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child, index) => {
            if (child.type === Tab) {
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
            if (child.type == Tab) {
                let props = {};

                props.active = this.state.active === index;
                props.key = index;
                props.onClick = this.onItemClick.bind(this, index);

                tabs.push(
                    React.createElement(
                        Item,
                        props,
                        child.props.title
                    )
                );
            }
        });

        return (
            <TabTitle
                key="titles"
                type={this.props.type}
            >
                {tabs}
            </TabTitle>
        );
    }

    render() {
        let { children, className, component, defaultClasses, position, type,
              ...other } = this.props;

        return React.createElement(
            this.props.component,
            other,
            [
                this.renderTitles(),
                this.renderChildren()
            ]
        );
    }

}
