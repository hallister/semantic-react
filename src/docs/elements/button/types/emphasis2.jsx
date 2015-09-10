import React from 'react';
import { Button, Segment } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button secondary>
    Okay
</Button>
<Button>
    Cancel
</Button>
`);

export class Emphasis2Doc extends React.Component {
    render() {
        return (
            <DocBlock JSX={JSXExample}>
              <Button secondary>
                  Okay
              </Button>
              <Button>
                  Cancel
              </Button>
            </DocBlock>
        );
    }
}