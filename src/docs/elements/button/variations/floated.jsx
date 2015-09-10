import React from 'react';
import { Button, Segment } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button floated="right">
    Right Floated
</Button>

<Button floated>
    Left Floated
</Button>
`);

export class FloatedDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>
                      <Segment basic clearing>
                        <Button floated="right">
                            Right Floated
                        </Button>
                        <Button floated="left">
                            Left Floated
                        </Button>
                      </Segment>
            </DocBlock>
        );
    }
}