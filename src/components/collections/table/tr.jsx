import React from 'react';
import Td from './td';

export default class Tr extends React.PureComponent {
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
