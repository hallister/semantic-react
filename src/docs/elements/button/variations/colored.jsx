import React from 'react';
import { Button, Icon, Label } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Colors } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Colors.forEach(function(color) {
    JSXExample += he.encode(`
<Button color="` + color + `">` + color.charAt(0).toUpperCase() + color.slice(1) + `</Button>`);
});

export class ColoredDoc extends React.Component {
    render() {
        let buttonDiv = [];

        Colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            buttonDiv.push(<Button color={color} key={color}>{capColor}</Button>);
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