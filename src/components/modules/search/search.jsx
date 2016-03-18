import React from 'react';
import { Icon } from '../../elements';
import Transition from 'react-motion-ui-pack';
import Results from './results';
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
        ]),
        value: React.PropTypes.string
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
        icon: 'search',
        onSearchClick: function noop() {},
        placeholder: 'Search...',
        value: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            focus: false
        };
    }

    onBlur() {
        if (this.state.focus) {
            this.setState({
                focus: false
            });
        }
    }

    onChange(e) {
        this.props.onChange(e);
    }

    onFocus() {
        this.setState({
            focus: true
        });
    }

    onSearchClick(e, child) {
        this.props.onSearchClick(e, child);
    }

    renderInput() {
        return (
            <div className={this.getClassesInput()}
                 key="searchInput"
            >
                <input className="prompt"
                    onBlur={this.onBlur.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    placeholder={this.props.placeholder}
                    type="text"
                    value={this.props.value}/>
                {this.renderInputIcon()}
            </div>
        );
    }

    renderInputIcon() {
        if (!this.props.icon) return null;

        return <Icon name={this.props.icon} />;
    }

    renderResults() {
        let props = {
            animate: this.state.focus && this.props.value !== '',
            emptyHeader: this.props.emptyHeader,
            emptyMessage: this.props.emptyMessage,
            onSearchClick: this.onSearchClick.bind(this),
            results: this.state.focus ? this.props.results : [],
            search: this.props.value || ''
        };

        return (
            <Transition component={false}
                        enter={this.props.enterAnimation}
                        leave={this.props.leaveAnimation}
                        key="searchResults"
            >
                {(this.state.focus && this.props.value !== '') &&
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
                this.renderInput(),
                this.renderResults()
            ]
        );
    }

    getClassesInput() {
        return classNames('ui input', {
            icon: Boolean(this.props.icon)
        });
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,
            search: this.props.defaultClasses,
            
            loading: this.props.loading,
            focus: this.state.focus,
            
            category: !Array.isArray(this.props.results)
        };
    }

}
