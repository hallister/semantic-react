import React from 'react'
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Segment from '../../elements/segment/segment';

export default class Tab extends React.Component {
    static propTypes = {
        ...Segment.propTypes,
        /**
         * True if tab is active. Being set automatically
         */
        active: React.PropTypes.bool,
        /**
         * True if display loading spinner
         */
        loading: React.PropTypes.bool,
        /**
         * Tab index value. Should be equal to one of MenuItem value
         */
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]).isRequired
    };

    static defaultProps = {
        ...Segment.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Segment: Segment
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { children, active, loading, value, ...other } = this.props;
        other.className = classNames(other.className, this.getClasses());

        return (
            <Tab.Components.Segment {...other} attached="bottom">
                {children}
            </Tab.Components.Segment>
        );
    }

    getClasses() {
        return {
            active: this.props.active,
            loading: this.props.loading && this.props.active,
            tab: true
        };
    }
}
