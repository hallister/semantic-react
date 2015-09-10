import React from 'react';
import { Button, Segment, Image } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button attached="top" focusable>
    Top
</Button>
<Segment attached>
    ...
</Segment>
<Button attached="bottom" focusable>
    Bottom
</Button>
`);

export class VerticallyAttachedDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <Button attached="top" focusable>
                    Top
                </Button>
                <Segment attached>
                    <Image src="docs/images/paragraph.png" className="wireframe" />
                </Segment>
                <Button attached="bottom" focusable>
                    Bottom
                </Button>

            </DocBlock>
        );
    }
}