import React from 'react';
import Td from './td';

let Tr = (props) => {
    return (
        <Tr.Components.Td
            {...props}
            component={props.component}
        >
            {props.children}
        </Tr.Components.Td>
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

Tr.Components = {
    Td: Td
};

export default Tr;
