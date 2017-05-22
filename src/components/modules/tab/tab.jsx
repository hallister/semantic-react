import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Segment from '../../elements/segment/segment';

export default class Tab extends React.PureComponent {
    static propTypes = {
        ...Segment.propTypes,
        /**
         * True if tab is active. Being set automatically
         */
        active: PropTypes.bool,
        /**
         * True if display loading spinner
         */
        loading: PropTypes.bool,
        /**
         * Tab index value. Should be equal to one of MenuItem value
         */
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
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
