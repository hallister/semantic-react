import React from 'react';
import { Td } from './td';

let Tr = (props) => {
    return (
        <Td
            {...props}
            component={props.component}
        >
            {props.children}
        </Td>
    );
};

Tr.propTypes = {
    children: React.PropTypes.node,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
}

Tr.defaultProps = {
    component: 'tr'
}

exports.Tr = Tr;
