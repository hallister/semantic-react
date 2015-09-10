import React from 'react';
import { Button, Icon, Label } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Colors } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Colors.forEach(function(color) {
    JSXExample += he.encode(`
<Button basic color="` + color + `" key="` + color + `">` + color.charAt(0).toUpperCase() + color.slice(1) + `</Button>`);
});

export class BasicDoc extends React.Component {
    render() {
        let buttonDiv = [];

        Colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            buttonDiv.push(<Button basic color={color} key={color}>{capColor}</Button>);
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