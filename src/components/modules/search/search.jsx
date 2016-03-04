import React from 'react';
import { Icon } from '../../elements';
import Transition from 'react-motion-ui-pack';
import Results from './results';
import classNames from 'classnames';
import Radium from 'radium';

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
@Radium
export default class Search extends React.Component {
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
        enterAnimation: React.PropTypes.object,
        icon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        leaveAnimation: React.PropTypes.object,
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
            opacity: 1,
            scale: 1
        },
        leaveAnimation: {
            opacity: 0,
            scale: 0
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
                type="text" />
        );
    }

    renderResults() {
        let props = {
            emptyHeader: this.props.emptyHeader,
            emptyMessage: this.props.emptyMessage,
            key: 'searchResults',
            onSearchClick: this.onSearchClick.bind(this),
            results: this.results || this.props.results,
            search: this.searchInput ? this.searchInput.value : ''
        };

        return (
            <Transition component={false}
                        enter={this.props.enterAnimation}
                        leave={this.props.leaveAnimation}
            >
                {(this.state.focus && this.searchInput.value !== '') &&
                    <Results {...props}/>
                }

            </Transition>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, enterAnimation, icon, leaveAnimation, loading,
              onChange, onSearchClick, placeholder, results,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

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
