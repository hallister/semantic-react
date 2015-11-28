import React from 'react';
import { Content } from '../../src/components/elements';
import { Table } from '../../src/components/collections';
import { Tabs, Tab } from '../../src/components/modules';
import { Components } from '../utilities';
import PropTableBlock from './proptableblock';

let PropBlock = (props) => {
    let { children, ...other } = props;
    let propList = [];

    let tabs = (
        <Tabs
            segment={false}
            type="menu"
        >
            {propList}
        </Tabs>
    );

    let propTable = Object.keys(props.propList).map(component => {
        if (!props.propList[component].props) return null;

        let propDefs = Object.keys(props.propList[component].props).map(property => {
            let description = props.propList[component].props[property];

            return (
                <PropTableBlock
                    component={component}
                    description={description}
                    key={property}
                    name={property} />
            );
        });

        propList.push(
            <Tab
                active={propList.length === 0}
                header={Components[component] || component}
                key={component}
                segment={false}
            >
                <Table definition>
                    <tbody>
                        {propDefs}
                    </tbody>
                </Table>
            </Tab>
        );

        return propDefs;
    });

    if (propList.length === 0) {
        return <Content>No public properties.</Content>;
    } else if (propList.length === 1) {
        return (
            <Table definition>
                <tbody>
                    {propTable}
                </tbody>
            </Table>
        );
    } else {
        return tabs;
    }
};

PropBlock.propTypes = {
    propList: React.PropTypes.object
}

export default PropBlock;
