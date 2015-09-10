import React from 'react';
import { Button } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button positive>
    Positive Button
</Button>
<Button negative>
    Negative Button
</Button>
`);

export class ConsequenceDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <Button positive>
                    Positive Button
                </Button>
                <Button negative>
                    Negative Button
                </Button>

            </DocBlock>
        );
    }
}