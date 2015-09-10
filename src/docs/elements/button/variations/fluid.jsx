import React from 'react';
import { Button } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button fluid>
    Fits container
</Button>
`);

export class FluidDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <Button fluid>
                    Fits container
                </Button>

            </DocBlock>
        );
    }
}