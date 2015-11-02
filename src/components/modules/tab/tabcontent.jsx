import React from 'react';
import classNames from 'classnames';

export class TabContent extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        segment: React.PropTypes.bool,
        type: React.PropTypes.oneOf([
            'tab',
            'menu',
            'pill'
        ])
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        position: 'bottom',
        segment: true
    };

    render() {
        let { active, children, className, component, defaultClasses,
              loading, segment, type, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses())

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,

            // active
            active: this.props.active,

            // states
            loading: this.props.loading && this.props.active,

            // position
            'bottom attached': this.props.type === 'tab',

            tab: this.props.defaultClasses,
            segment: this.props.defaultClasses && this.props.segment
        }
    }

}
