import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class TabContent extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        active: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        position: React.PropTypes.oneOf(['top', 'bottom']),
        segment: React.PropTypes.bool,
        type: React.PropTypes.oneOf([
            'tab',
            'menu',
            'pill'
        ])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        position: 'bottom',
        segment: true
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { active, children, className, component, defaultClasses,
              loading, segment, position, type, ...other } = this.props;
        /* eslint-enable no-use-before-define */

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
