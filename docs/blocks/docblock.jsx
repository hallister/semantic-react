import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from '../../src/components/elements';

export default class DocBlock extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        params: React.PropTypes.object,
        title: React.PropTypes.string,
        type: React.PropTypes.string
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { children, params, type, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        let childArray = React.Children.toArray(children);

        return (
            <Segment basic>
                <Header component="h1"
                        dividing
                >
                    {this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}
                </Header>
                <Segment basic>
                    <Header>Examples</Header>
                    {childArray[0]}
                    <Header>Props</Header>
                    {childArray[1]}
                </Segment>
            </Segment>
        );
    }

}
