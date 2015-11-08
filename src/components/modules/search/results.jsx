import React from 'react';
import { Animate } from '../../modules';
import { Content } from '../../elements';
import classNames from 'classnames';

@Animate
export class Results extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        emptyHeader: React.PropTypes.string,
        emptyMessage: React.PropTypes.string,
        onSearchClick: React.PropTypes.func,
        results: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ]),
        search: React.PropTypes.string,
        style: React.PropTypes.object
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        emptyHeader: 'No Results',
        emptyMessage: 'Your search returned no results'
    };

    onClick(child, e) {
        this.props.onSearchClick(e, child);
    }

    renderChildren() {
        if (this.props.results.length === 0) {
            return this.renderEmpty();
        } else if (Array.isArray(this.props.results)) {
            return this.renderArray();
        } else if (typeof this.props.results === 'object') {
            return this.renderObject();
        } else {
            return false;
        }
    }

    renderArray() {
        let results = arguments[0] || this.props.results;

        return results.map(child => {
            let description = null;
            let title = typeof child === 'object' ? child.title : child;

            // use title and description
            if (typeof child === 'object' && child.description) {
                description = (
                    <div className="description">
                        {child.description}
                    </div>
                );
            }

            return (
                <a className="result"
                    onMouseDown={this.onClick.bind(this, title)}
                >
                    <Content>
                        <div className="title">
                            {title}
                        </div>
                        {description}
                    </Content>
                </a>
            )
        });
    }

    renderObject() {
        let children = [];

        Object.keys(this.props.results).map(child => {
            children.push(
                <div className="category">
                    <div className="name">{child}</div>
                    {this.renderArray(this.props.results[child])}
                </div>
            );
        });

        return children;
    }

    renderEmpty() {
        return (
            <div className="message empty">
                <div className="header">{this.props.emptyHeader}</div>
                <div className="description">{this.props.emptyMessage}</div>
            </div>
        );
    }

    render() {
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, onSearchClick, results, search, style,
              ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.props.style;

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    getClasses() {
        return {
            results: this.props.defaultClasses,

            transition: this.props.defaultClasses,
            visible: this.props.defaultClasses
        }
    }

}
