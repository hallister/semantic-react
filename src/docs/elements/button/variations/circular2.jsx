import React from 'react';
import { SocialButton } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';
import { Social } from '../../../utilities';

import classNames from 'classnames';
import he from 'he';

let JSXExample = '';

Social.forEach(function(company) {
    JSXExample += he.encode(`
<SocialButton circular name="` + company.toLowerCase() + `" />`);
});

export class Circular2Doc extends React.Component {
    render() {
        let buttonDiv = [];

        Social.forEach(function(social) {
            let lowerSocial = social.toLowerCase();

            buttonDiv.push(<SocialButton circular name={lowerSocial} key={social} />);
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