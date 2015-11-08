import React from 'react';
import { Icon } from '../../elements';
import { Results } from './results';
import classNames from 'classnames';

/*
3 support results types:

{
    title: 'test',
    description: 'testing'
}

{
    animal: ['cat', 'dog']
}

['test', 'test']
*/

export class Search extends React.Component {
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
        enterAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        icon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        leaveAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        loading: React.PropTypes.bool,
        onChange: React.PropTypes.func.isRequired,
        onSearchClick: React.PropTypes.func,
        placeholder: React.PropTypes.string,
        results: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ])
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        enterAnimation: {
            duration: 200,
            easing: 'out-expo',
            from: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            },
            to: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            }
        },
        leaveAnimation: {
            duration: 200,
            easing: 'out-expo',
            from: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            },
            to: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            }
        },
        onSearchClick: function noop() {},
        placeholder: 'Search...'
    };

    constructor(props) {
        super(props);

        // see shouldComponentUpdate
        this.results = false;

        this.state = {
            focus: false
        }
    }

    shouldComponentUpdate(props, state) {
        // if the results are identical, don't rerender
        // if the new state is inactive, we may be trying to blur
        if (this.props.results === props.results && state.active) {
            return false;
        }

        // if the search box is empty, don't allow re-rendering of results
        // while the box animates closed
        if (this.searchInput && this.searchInput.value === '') {
            this.results = this.props.results;
        } else {
            this.results = false;
        }

        return true;
    }

    onBlur() {
        this.setState({
            focus: false
        });
    }

    onChange(e) {
        if (e.target.value === '') {
            this.setState({
                focus: false
            });
        } else {
            this.setState({
                focus: true
            });
            this.props.onChange(e);
        }
    }

    onFocus() {
        this.setState({
            focus: true
        });
    }

    onSearchClick(e, child) {
        this.searchInput.value = child;

        this.props.onSearchClick(e, child);
    }

    renderChildren() {
        if (this.props.icon || this.props.loading) {
            return this.renderIconInput();
        } else {
            return this.renderInput();
        }
    }

    renderIconInput() {
        return (
            <div className="ui icon input">
                {this.renderInput()}
                <Icon name={this.props.icon || 'search'} />
            </div>
        );
    }

    renderInput() {
        return (
            <input className="prompt"
                key="searchPrompt"
                onBlur={this.onBlur.bind(this)}
                onChange={this.onChange.bind(this)}
                onFocus={this.onFocus.bind(this)}
                placeholder={this.props.placeholder}
                ref={(ref) => this.searchInput = ref}
                type="text"
            />
        );
    }

    renderResults() {
        let props = {
            animate: this.state.focus && this.searchInput.value !== '',
            emptyHeader: this.props.emptyHeader,
            emptyMessage: this.props.emptyMessage,
            key: 'searchResults',
            onSearchClick: this.onSearchClick.bind(this),
            results: this.results || this.props.results,
            search: this.searchInput ? this.searchInput.value : '',
            start: this.props.enterAnimation,
            end: this.props.leaveAnimation
        };

        return React.createElement(
            Results,
            props
        );
    }

    render() {
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, enterAnimation, icon, leaveAnimation, loading,
              onChange, onSearchClick, placeholder, results,
              ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            [
                this.renderChildren(),
                this.renderResults()
            ]
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,

            focus: this.state.focus,

            category: !Array.isArray(this.props.results),

            search: this.props.defaultClasses
        };
    }

}
