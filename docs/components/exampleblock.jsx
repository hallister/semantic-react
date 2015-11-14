import React from 'react';
import { Tabs, Tab } from '../../src/components/modules';

function renderChildren(props) {
    return props.children.map(child => {
        return (
            <Tab
                header={child.key || 'Default'}
                key={child.key || 'default'}
                segment={false}
            >
                {child}
            </Tab>
        );
    });
}

let ExampleBlock = (props) => {
    let { children, ...other } = props;
    let propList = renderChildren(props);

    let tabs = (
        <Tabs
            segment={false}
            type="menu"
        >
            {propList}
        </Tabs>
    );

    return tabs;
};

export default ExampleBlock;
