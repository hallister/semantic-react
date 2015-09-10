import React from 'react';
import { Button, Icon, Label } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button focusable>
    <Button color="red">
        <Icon name="heart" /> Like
    </Button>
    <Label basic pointing="left" color="red">
        1,048
    </Label>
</Button>

<Button focusable>
    <Button basic color="blue">
        <Icon name="fork" /> Forks
    </Button>
    <Label basic pointing="left" color="blue">
        1,048
    </Label>
</Button>
`);

export class Labeled2Doc extends React.Component {
    render() {
        return (
            <DocBlock JSX={JSXExample}>

                <Button focusable>
                    <Button color="red">
                        <Icon name="heart" /> Like
                    </Button>
                    <Label basic pointing="left" color="red">
                        1,048
                    </Label>
                </Button>

                <Button focusable>
                    <Button basic color="blue">
                        <Icon name="fork" /> Forks
                    </Button>
                    <Label basic pointing="left" color="blue">
                        1,048
                    </Label>
                </Button>

            </DocBlock>
        );
    }
}