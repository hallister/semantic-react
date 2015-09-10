import React from 'react';
import { Button, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button disabled>
  <Icon name="user" />
  Followed
</Button>
`);

export class DisabledDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                      <Button disabled>
                        <Icon name="user" />
                        Followed
                      </Button>

            </DocBlock>
        );
    }
}