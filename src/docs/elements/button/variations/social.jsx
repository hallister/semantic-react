import React from 'react';
import { SocialButton } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Social } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Social.forEach(function(company) {
    JSXExample += he.encode(`
<SocialButton name="` + company.toLowerCase() + `">
  ` + company + `
</SocialButton>
`);
});

export class SocialDoc extends React.Component {
    render() {
        let buttonDiv = [];

        Social.forEach(function(social) {
            let lowerSocial = social.toLowerCase();

            buttonDiv.push(<SocialButton name={lowerSocial} key={social}>{social}</SocialButton>);
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