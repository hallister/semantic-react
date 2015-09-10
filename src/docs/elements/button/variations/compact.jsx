import React from 'react';
import { Button, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button compact>
    Hold
</Button>

<Button compact>
    <Icon name="pause" />
</Button>

<Button compact>
    <Icon name="pause" />
    Pause
</Button>
`);

export class CompactDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <Button compact>
                    Hold
                </Button>
                <Button compact>
                    <Icon name="pause" />
                </Button>
                <Button compact>
                    <Icon name="pause" />
                    Pause
                </Button>                                      
            </DocBlock>
        );
    }
}