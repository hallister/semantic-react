import React from 'react';
import * as propList from './props';
import Examples from './examples';
import ExampleBlock from '../exampleblock';
import PropBlock from '../propblock';
import DocBlock from '../docblock';
import ExampleContentBlock from '../examplecontentblock';

import { configParser } from '../../utilities';

let ComponentDoc = (props) => {
    let { children, ...other } = props;

    let exampleObject = configParser(Examples);
    let exampleCode = configParser(Examples, true);
    let exampleArray = [];

    Object.keys(exampleObject).forEach(example => {
        exampleArray.push(
            <ExampleContentBlock
                example={example}
                exampleCode={exampleCode}
                exampleObject={exampleObject}
                key={example}
            />
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
