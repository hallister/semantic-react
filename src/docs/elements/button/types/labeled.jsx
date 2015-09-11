import React from 'react';
import { Button, Icon, Label, LabeledButton } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<LabeledButton focusable>
    <Icon name="heart" /> 
    Like
    <Label basic>
        2,048
    </Label>
</LabeledButton>

<LabeledButton focusable>
    <Label basic pointing="right">
        2,048
    </Label>
    <Icon name="heart" /> Like
</LabeledButton>

<LabeledButton focusable>
    <Label basic>
        1,048
    </Label>
    <Icon name="fork" />
</LabeledButton>
`);

export class LabeledDoc extends React.Component {
    render() {
        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <LabeledButton focusable>
                    <Icon name="heart" /> 
                    Like
                    <Label basic>
                        2,048
                    </Label>
                </LabeledButton>

                <LabeledButton focusable>
                    <Label basic pointing="right">
                        2,048
                    </Label>
                    <Icon name="heart" /> Like
                </LabeledButton>

                <LabeledButton focusable>
                    <Label basic>
                        1,048
                    </Label>
                    <Icon name="fork" />
                </LabeledButton>
            </DocBlock>
        );
    }
}