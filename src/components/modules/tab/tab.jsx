import React from 'react';
import TabContent from './tabcontent';

export default class Tab extends React.Component {
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

    /* eslint-disable */
    static Components = {
        TabContent: TabContent
    };
    /* eslint-enable */

    render() {
        /* eslint-disable no-use-before-define */
        let { children, header, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        return (
            <Tab.Components.TabContent { ...other }>
                {this.props.children}
            </Tab.Components.TabContent>
        );
    }
}
