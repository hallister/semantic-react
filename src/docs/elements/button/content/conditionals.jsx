import React from 'react';
import { Button, Buttons } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Buttons>
    <Button>One</Button>
    <div className="or"/>
    <Button>Three</Button>
</Buttons>
`);



export class ConditionalsDoc extends React.Component {
    render() {

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>

                      <Buttons>
                          <Button>Cancel</Button>
                          <div className="or"/>
                          <Button positive>Save</Button>
                      </Buttons>

            </DocBlock>
        );
    }
}