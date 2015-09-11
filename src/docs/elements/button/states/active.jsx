import React from 'react';
import { IconButton } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<IconButton name="user" active>
    Follow
</IconButton>
`);

export class ActiveDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                      <IconButton name="user" active>
                          Follow
                      </IconButton>

            </DocBlock>
        );
    }
}