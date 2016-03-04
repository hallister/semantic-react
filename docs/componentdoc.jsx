import React from 'react';
import DocBlock from './blocks/docblock';
import ExampleBlock from './blocks/exampleblock';
import PropBlock from './blocks/propblock';
import ExampleContentBlock from './blocks/examplecontentblock';

import { configParser } from './utilities';

let ComponentDoc = (props) => {
    /* eslint-disable quotes */
    let propList = require("./components/" + props.params.component + "/props.js");
    let Examples = require("./components/" + props.params.component + "/examples.jsx");
    /* eslint-enable-quotes */
    /* eslint-disable no-use-before-define */
    let { children, ...other } = props;
    /* eslint-enable no-use-before-define */

    let exampleObject = configParser(Examples);
    let exampleCode = configParser(Examples, true);
    let exampleArray = [];

    Object.keys(exampleObject).forEach(example => {
        exampleArray.push(
            <ExampleContentBlock
                example={example}
                exampleCode={exampleCode}
                exampleObject={exampleObject}
                key={example} />
        )
    });

    return (
        <DocBlock title={props.params.component}>
            <ExampleBlock>
                {exampleArray}
            </ExampleBlock>
            <PropBlock propList={propList}/>
        </DocBlock>
    );
};

ComponentDoc.propTypes = {
    children: React.PropTypes.node,
    params: React.PropTypes.object
}

export default ComponentDoc;
