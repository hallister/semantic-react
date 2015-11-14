import React from 'react';
import { Td, Tr, Grid, Column, Row } from '../../src/components/collections';

function handleEnum(types) {
    let enums = types.value.map(value => {
        return value.value;
    });

    return [types.name + '(' + enums.join(', ') + ')'];
}

function handleUnion(value) {
    return value.map(types => {
        if (types.name === 'enum') {
            return handleEnum(types);
        } else {
            return [types.name];
        }
    });
}

let PropTableBlock = (props) => {
    let { ...other } = props;

    let typeName = [];

    if (props.description.type.name == 'union') {
        typeName = handleUnion(props.description.type.value);
    } else if (props.description.type.name == 'enum') {
        typeName = handleEnum(props.description.type);
    } else {
        typeName.push(props.description.type.name);
    }

    /* eslint-disable */
    return (
        <Tr aligned="top">
            <Td collapsing>
                {props.name}
                <span style={{ fontWeight: 'bold' }}>{props.description.required ? 'required' : ''}</span>
            </Td>
            <Td>
                <Grid>
                    <Row columns={2}>
                        <Column style={{ color: 'rgba(30,0,0,.5)' }}>{typeName.join(' | ')}</Column>
                        <Column>{props.description.defaultValue ? 'default: ' + props.description.defaultValue.value : ''}</Column>
                    </Row>
                    <Column style={{ paddingTop: 0 }}
                        width={16}
                    >
                        {props.description.description}
                    </Column>
                </Grid>
            </Td>
        </Tr>
    );
    /* eslint-enable */
};

PropTableBlock.propTypes = {
    description: React.PropTypes.object,
    name: React.PropTypes.string
}

export default PropTableBlock;
