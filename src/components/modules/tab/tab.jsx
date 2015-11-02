import React from 'react';
import { TabContent } from './tabcontent';

export class Tab extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        title: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        component: 'div',
        tabsChild: false
    };

    render() {
        let { children, title, ...other } = this.props;

        return (
            <TabContent { ...other }>
                {this.props.children}
            </TabContent>
        );
    }
}
