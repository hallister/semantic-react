import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import TabContent from './tabcontent';
import DefaultProps from '../../defaultProps';

export default class Tab extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        header: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        TabContent: TabContent
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
