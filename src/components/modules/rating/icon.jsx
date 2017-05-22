import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../elements/icon/icon';

/**
 * Internal rating icon component
 */
export default class RatingIcon extends React.PureComponent {
    static propTypes = {
        /**
         * Active rating icon
         */
        active: PropTypes.bool,
        /**
         * Selected (on hover) rating icon
         */
        selected: PropTypes.bool,
        /**
         * Icon index
         */
        index: PropTypes.number.isRequired,
        /**
         * On click callback
         */
        onClick: PropTypes.func,
        /**
         * Mouse enter callback
         */
        onMouseEnter: PropTypes.func,
        /**
         * Mouse leave callback
         */
        onMouseLeave: PropTypes.func
    };

    static defaultProps = {
        active: false,
        selected: false,
        onClick: () => {},
        onMouseEnter: () => {},
        onMouseLeave: () => {}
    };

    /**
     * Click callback
     * @param {React.MouseEvent} event
     */
    onClick = (event) => {
        event.stopPropagation();
        const { onClick, index } = this.props;
        onClick(index);
    };

    /**
     * Mouse enter callback
     * @param {React.MouseEvent} event
     */
    onMouseEnter = (event) => {
        event.stopPropagation();
        const { onMouseEnter, index } = this.props;
        onMouseEnter(index);
    };

    /**
     * Mouse leave callback
     * @param {React.MouseEvent} event
     */
    onMouseLeave = (event) => {
        event.stopPropagation();
        const { onMouseLeave, index } = this.props;
        onMouseLeave(index);
    };

    render() {
        return (
            <Icon className={classNames(this.getClasses())}
                  onClick={this.onClick}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
            />
        );
    }


    getClasses() {
        return {
            active: this.props.active,
            selected: this.props.selected
        };
    }
}
