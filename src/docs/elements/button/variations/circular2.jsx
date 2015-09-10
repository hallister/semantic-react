import React from 'react';
import { Button, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Social } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Social.forEach(function(company) {
    JSXExample += he.encode(`
<Button circular social="` + company.toLowerCase() + `">
  <Icon name="` + company.toLowerCase() + `" />
</Button>
`);
});

export class Circular2Doc extends React.Component {
    render() {
        let buttonDiv = [];

        Social.forEach(function(social) {
            let lowerSocial = social.toLowerCase();

            buttonDiv.push(<Button circular social={lowerSocial} key={social}><Icon name={lowerSocial} /></Button>);
        });

        return (
            <DocBlock JSX={JSXExample}>
              <div className="spaced example">
                {buttonDiv}
              </div>
                   

            </DocBlock>
        );
    }
}