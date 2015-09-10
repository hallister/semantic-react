import React from 'react';
import { Button, Segment, Image } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button attached="left">
    Left
</Button>

<Button attached="right">
    Right
</Button>
`);

export class HorizontallyAttachedDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <Button attached="left">
                    Left
                </Button>
                <Button attached="right">
                    Right
                </Button>

            </DocBlock>
        );
    }
}