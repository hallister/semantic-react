import React from 'react';
import { Item } from '../../elements';

export class Option extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        value: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <Item
                {...this.props}
            >
                {this.props.children}
            </Item>
        );
    }
}
