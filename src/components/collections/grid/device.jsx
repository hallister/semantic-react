import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';

let validProps = {
    reversed: ['vertically']
}

export class Device extends React.Component {
    static propTypes = {
        callback: React.PropTypes.func,
        children: React.PropTypes.node,
        only: React.PropTypes.bool,
        reversed: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['vertically'])
        ]),
        type: React.PropTypes.oneOf([
            'mobile',
            'computer',
            'tablet'
        ]).isRequired,
        width: React.PropTypes.number
    };

    renderStyle() {
        let classes = {};

        if (this.props.width) {
            if (this.props.width > 0  && this.props.width <= 16) {
                classes[Numbers[this.props.width] + ' wide'] = true;
            }
        }

        if (this.props.only) {
            classes[this.props.type + ' only'] = true;
        } else {
            classes[this.props.type] = true;
        }


        classes = validateClassProps(classes, this.props, validProps);

        return this.props.callback(classes, this.props.type);
    }

    render() {
        this.renderStyle();
        return null;
    }

}
