import React from 'react';
import { Button, Icon, Label } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Colors } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Colors.forEach(function(color) {
    JSXExample += he.encode(`
<Button inverted color="` + color + `" key="` + color + `">` + color.charAt(0).toUpperCase() + color.slice(1) + `</Button>`);
});

export class InvertedDoc extends React.Component {
    render() {
        let buttonDiv = [];
        let index = 0;
        let halfItems = Math.ceil(Colors.length/2);

        Colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            buttonDiv.push(<Button inverted color={color} key={color}>{capColor}</Button>);
            index++;

            if (index === 7) {
            }
        });

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      inverted
                      className="spaced example"
                      JSX={JSXExample}>
                <div className="spaced example">
                  {buttonDiv}
                </div>


            </DocBlock>
        );
    }
}