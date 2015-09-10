import React from 'react';
import { Button, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Size } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Size.forEach(function(size) {
    let capSize = size.charAt(0).toUpperCase() + size.slice(1);

    JSXExample += he.encode(`
<Button size="` + size + `">
  ` + capSize + `
</Button>
`);
});

export class SizeDoc extends React.Component {
    render() {
        let buttonDiv = [];

        Size.forEach(function(size) {
            let capSize = size.charAt(0).toUpperCase() + size.slice(1);

            buttonDiv.push(<Button social={size} key={size}>{capSize}</Button>);
        });

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>
              <div className="spaced example">
                {buttonDiv}
              </div>
                   

            </DocBlock>
        );
    }
}