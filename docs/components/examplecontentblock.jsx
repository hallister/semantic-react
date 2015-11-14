import React from 'react';
import { Segment, Label } from '../../src/components/elements';

let ExampleContentBlock = (props) => {
    let { example, exampleCode, exampleObject, ...other } = props;

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
