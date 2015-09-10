import React from 'react';
import { Button } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button loading>
  Loading
</Button>

<Button basic loading>
  Loading
</Button>

<Button primary loading>
  Loading
</Button>

<Button secondary loading>
  Loading
</Button>
`);

export class LoadingDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                      <Button loading>
                        Loading
                      </Button>

                      <Button basic loading>
                        Loading
                      </Button>

                      <Button primary loading>
                        Loading
                      </Button>

                      <Button secondary loading>
                        Loading
                      </Button>

            </DocBlock>
        );
    }
}