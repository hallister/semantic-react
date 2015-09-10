import React from 'react';
import { Button, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button active>
  <Icon name="user" />
  Follow
</Button>

`);

export class ActiveDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                      <Button active>
                        <Icon name="user" />
                        Follow
                      </Button>

            </DocBlock>
        );
    }
}