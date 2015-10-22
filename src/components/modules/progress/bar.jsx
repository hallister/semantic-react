import React from 'react';
import classNames from 'classnames';

export class Bar extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        duration: React.PropTypes.number,
        progress: React.PropTypes.number,
        showPercentage: React.PropTypes.bool,
        style: React.PropTypes.object
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

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
        let { defaultClasses, progress, showPercentage, component,
              ...other } = this.props;

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
