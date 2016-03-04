import React from 'react';
import { Segment, Label } from '../../src/components/elements';

let ExampleContentBlock = (props) => {
    /* eslint-disable no-use-before-define */
    let { example, exampleCode, exampleObject, ...other } = props;
    /* eslint-enable no-use-before-define */

    return (
        <div
            key={props.example}
        >
            <Segment>
                {props.exampleObject[example]}
            </Segment>

            <Segment>
                <Label
                    attached="top"
                    color="blue"
                >
                    Code
                </Label>
                <pre>
                    <code className="html">
                        {props.exampleCode[example]}
                    </code>
                </pre>
            </Segment>
        </div>
    )
};

ExampleContentBlock.propTypes = {
    example: React.PropTypes.string,
    exampleCode: React.PropTypes.object,
    exampleObject: React.PropTypes.object
}

export default ExampleContentBlock;
