import React from 'react';
import Td from './td';
import Radium from 'radium';

let tr = (props) => {
    return (
        <Td
            {...props}
            component={props.component}
        >
            {props.children}
        </Td>
    );
};

tr.propTypes = {
    children: React.PropTypes.node,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
}

tr.defaultProps = {
    component: 'tr'
}

tr = Radium(tr);
export default tr;
