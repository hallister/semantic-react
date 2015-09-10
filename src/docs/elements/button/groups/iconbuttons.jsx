import React from 'react';
import { Button, Buttons, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Buttons>
    <Button>
        <Icon name="align left" />
    </Button>
    <Button>
        <Icon name="align center" />
    </Button>
    <Button>
        <Icon name="align right" />
    </Button>
    <Button>
        <Icon name="align justify" />
    </Button>
</Buttons>

<Buttons>
    <Button>
        <Icon name="bold" />
    </Button>
    <Button>
        <Icon name="underline" />
    </Button>
    <Button>
        <Icon name="text width" />
    </Button>
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
                          <Button>
                              <Icon name="align left" />
                          </Button>
                          <Button>
                              <Icon name="align center" />
                          </Button>
                          <Button>
                              <Icon name="align right" />
                          </Button>
                          <Button>
                              <Icon name="align justify" />
                          </Button>
                      </Buttons>

                      <Buttons>
                          <Button>
                              <Icon name="bold" />
                          </Button>
                          <Button>
                              <Icon name="underline" />
                          </Button>
                          <Button>
                              <Icon name="text width" />
                          </Button>
                      </Buttons>

            </DocBlock>
        );
    }
}