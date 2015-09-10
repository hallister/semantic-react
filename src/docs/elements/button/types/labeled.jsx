import React from 'react';
import { Button, Icon, Label } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button focusable>
    <Button>
        <Icon name="heart" /> Like
    </Button>
    <Label basic>
        2,048
    </Label>
</Button>

<Button focusable>
    <Label basic pointing="right">
        2,048
    </Label>
    <Button>
        <Icon name="heart" /> Like
    </Button>
</Button>

<Button focusable>
    <Label basic>
        1,048
    </Label>
    <Button>
        <Icon name="fork" />
    </Button>
</Button>
`);

export class LabeledDoc extends React.Component {
    render() {
        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <Button focusable>
                    <Button>
                        <Icon name="heart" /> Like
                    </Button>
                    <Label basic>
                        2,048
                    </Label>
                </Button>

                <Button focusable>
                    <Label basic pointing="right">
                        2,048
                    </Label>
                    <Button>
                        <Icon name="heart" /> Like
                    </Button>
                </Button>

                <Button focusable>
                    <Label basic>
                        1,048
                    </Label>
                    <Button>
                        <Icon name="fork" />
                    </Button>
                </Button>
            </DocBlock>
        );
    }
}