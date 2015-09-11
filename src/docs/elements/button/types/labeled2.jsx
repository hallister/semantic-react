import React from 'react';
import { Button, Icon, Label, LabeledButton } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<LabeledButton color="red" focusable>
    <Icon name="heart" /> 
    Like
    <Label basic pointing="left" color="red">
        1,048
    </Label>
</LabeledButton>

<LabeledButton focusable basic color="blue">
    <Icon name="fork" /> 
    Forks
    <Label basic pointing="left" color="blue">
        1,048
    </Label>
</LabeledButton>
`);

export class Labeled2Doc extends React.Component {
    render() {
        return (
            <DocBlock JSX={JSXExample}>

                <LabeledButton color="red" focusable>
                    <Icon name="heart" /> 
                    Like
                    <Label basic pointing="left" color="red">
                        1,048
                    </Label>
                </LabeledButton>

                <LabeledButton focusable basic color="blue">
                    <Icon name="fork" /> 
                    Forks
                    <Label basic pointing="left" color="blue">
                        1,048
                    </Label>
                </LabeledButton>
            </DocBlock>
        );
    }
}