import React from 'react';
import { Tabs, Tab } from '../../src/components/modules';

function renderChildren(children) {
    return children.map(child => {
        return (
            <Tab
                active={child === children[0]}
                header={child.key || 'Default'}
                key={child.key || 'default'}
                segment={false}
            >
                {child}
            </Tab>
        );
    });
}

let ExampleBlock = ({ children, ...other }) => {
    let propList = renderChildren(children);

    let tabs = (
        <Tabs
            {...other}
            segment={false}
            type="menu"
        >
            {propList}
        </Tabs>
    );

    return tabs;
};

ExampleBlock.propTypes = {
    children: React.PropTypes.node
}

export default ExampleBlock;
