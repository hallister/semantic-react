import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Td from './td';

export default class Tr extends React.Component {
    static propTypes = {
        ...Td.propTypes
    };

    static defaultProps = {
        ...Td.defaultProps,
        component: 'tr'
    };

    /* eslint-disable */
    static Components = {
        Td: Td
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <Tr.Components.Td
                {...this.props}
                component={this.props.component}
            >
                {this.props.children}
            </Tr.Components.Td>
        );
    }
}
