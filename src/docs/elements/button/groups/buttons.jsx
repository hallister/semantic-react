import React from 'react';
import { Button, Buttons } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Buttons>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</Buttons>
`);



export class ButtonsDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                      <Buttons>
                          <Button>One</Button>
                          <Button>Two</Button>
                          <Button>Three</Button>
                      </Buttons>

            </DocBlock>
        );
    }
}