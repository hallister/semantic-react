import React from 'react';

exports.Container = (props) => {
    return (
        <div
            {...props}
            className="ui container"
        >
            {props.children}
        </div>
    );
};
