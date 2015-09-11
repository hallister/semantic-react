import React from 'react';
import { Button, Icon, Label, LabeledButton } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<LabeledButton>
    <Icon name="pause" />
    Pause
</LabeledButton>

<LabeledButton labeled="right" floated="right">
    <Icon name="pause" />
    Next
</LabeledButton>
`);

export class LabeledIconDoc extends React.Component {
    render() {
        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                <LabeledButton>
                    <Icon name="pause" />
                    Pause
                </LabeledButton>

                <LabeledButton labeled="right" floated="right">
                    <Icon name="pause" />
                    Next
                </LabeledButton>

            </DocBlock>
        );
    }
}