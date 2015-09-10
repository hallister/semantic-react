import React from 'react';
import { Button, Segment } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button>
  Button
</Button>

<Button focusable>
  Focusable
</Button>
`);

export class Button2Doc extends React.Component {
    render() {
        return (
            <DocBlock JSX={JSXExample}>
                      <Button>
                        Button
                      </Button>

                      <Button focusable>
                        Focusable
                      </Button>
            </DocBlock>
        );
    }
}