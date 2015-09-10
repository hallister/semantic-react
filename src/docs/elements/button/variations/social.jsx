import React from 'react';
import { Button, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Social } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Social.forEach(function(company) {
    JSXExample += he.encode(`
<Button social="` + company.toLowerCase() + `">
  <Icon name="` + company.toLowerCase() + `" />
  ` + company + `
</Button>
`);
});

export class SocialDoc extends React.Component {
    render() {
        let buttonDiv = [];

        Social.forEach(function(social) {
            let lowerSocial = social.toLowerCase();

            buttonDiv.push(<Button social={lowerSocial} key={social}><Icon name={lowerSocial} />{social}</Button>);
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