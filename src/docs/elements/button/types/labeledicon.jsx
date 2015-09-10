import React from 'react';
import { Button, Icon, Label } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button>
    <Icon name="pause" />
    Pause
</Button>

<Button labeled="right">
    <Icon name="pause" />
    Next
</Button>
`);

export class LabeledIconDoc extends React.Component {
    render() {
        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <Button>
                    <Icon name="pause" />
                    Pause
                </Button>

                <Button labeled="right" floated="right">
                    <Icon name="pause" />
                    Next
                </Button>

            </DocBlock>
        );
    }
}