import React from 'react';
import { TabContent } from './tabcontent';

export class Tab extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        header: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        component: 'div'
    };

    render() {
        let { children, header, ...other } = this.props;

        return (
            <TabContent { ...other }>
                {this.props.children}
            </TabContent>
        );
    }
}
