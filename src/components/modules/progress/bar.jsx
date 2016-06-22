import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Bar extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        duration: React.PropTypes.number,
        progress: React.PropTypes.number,
        showPercentage: React.PropTypes.bool,
        style: React.PropTypes.object
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }


    renderProgress() {
        return (
            <div
                className="progress"
                key="progressPercentage"
            >
                {typeof this.props.style.width === 'string' ? parseInt(this.props.style.width) + '%' : this.props.progress + '%'}
            </div>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { defaultClasses, progress, showPercentage, component,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

              // add classnames
        other.className = classNames(this.props.className, this.getClasses());
        other.style = { width: progress + '%', transitionDuration: this.props.duration + 'ms' }

        return React.createElement(
            this.props.component,
            other,
            this.props.showPercentage ? this.renderProgress() : []
        );
    }

    getClasses() {
        return {
            bar: true
        }
    }
}
