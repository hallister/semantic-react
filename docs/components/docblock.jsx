import React from 'react';
import { Segment, Header } from '../../src/components/elements';

export default class DocBlock extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        params: React.PropTypes.object,
        title: React.PropTypes.string,
        type: React.PropTypes.string
    };

    render() {
        let { children, params, type, ...other } = this.props;

        let childArray = React.Children.toArray(children);

        return (
            <Segment basic>
                <Header component="h1"
                    dividing
                >
                    {this.props.title}
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
