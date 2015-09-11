import React from 'react';
import { Button, Buttons, Icon, IconButton } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Buttons>
    <IconButton name="align left" />
    <IconButton name="align center" />
    <IconButton name="align right" />
    <IconButton name="align justify" />
</Buttons>

<Buttons>
    <IconButton name="bold" />
    <IconButton name="underline" />
    <IconButton name="text width" />
</Buttons>
`);



export class IconButtonsDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                      <Buttons>
                          <IconButton name="align left" />
                          <IconButton name="align center" />
                          <IconButton name="align right" />
                          <IconButton name="align justify" />
                      </Buttons>

                      <Buttons>
                          <IconButton name="bold" />
                          <IconButton name="underline" />
                          <IconButton name="text width" />
                      </Buttons>

            </DocBlock>
        );
    }
}