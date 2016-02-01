import React from 'react';
import classNames from 'classnames';

export default class Item extends React.Component {
    static propTypes = {
        defaultClass: React.PropTypes.bool,
        active: React.PropTypes.bool,
        selected: React.PropTypes.bool
    };

    render() {
        var className = classNames(this.props.className, this.getClasses());

        return (
            <div {...this.props} className={className}>
                {this.props.children}
            </div>
        );
    }

    getClasses() {
        return {
            item: this.props.defaultClass,
            // state
            active: this.props.active,
            selected: this.props.selected,
        };
    }
}

Item.defaultProps = {
    defaultClass: true,
    active: false,
    selected: false
}
