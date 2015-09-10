import React from 'react';
import { Button, Icon, Label } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Colors } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Colors.forEach(function(color) {
    JSXExample += he.encode(`
<Button inverted basic color="` + color + `" key="` + color + `">Basic ` + color.charAt(0).toUpperCase() + color.slice(1) + `</Button>`);
});

export class Inverted2Doc extends React.Component {
    render() {
        let buttonDiv = [];

        Colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            buttonDiv.push(<Button inverted basic color={color} key={color}>Basic {capColor}</Button>);
        });

        return (
            <DocBlock inverted
                      JSX={JSXExample}>
                <div className="spaced example">
                    {buttonDiv}
                </div>

            </DocBlock>
        );
    }
}