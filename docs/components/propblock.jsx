import React from 'react';
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
    )

    Object.keys(props.propList).map(component => {
        if (!props.propList[component].props) return null;

        let propDefs = Object.keys(props.propList[component].props).map(property => {

            let description = props.propList[component].props[property];

            return (
                <PropTableBlock
                    description={description}
                    key={property}
                    name={property}
                />
            );
        });

        propList.push(
            <Tab
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
    });

    return tabs;
};

PropBlock.propTypes = {
    propList: React.PropTypes.object
}

export default PropBlock;
