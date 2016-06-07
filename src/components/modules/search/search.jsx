import React from 'react';
import Transition from 'react-motion-ui-pack';
import classNames from 'classnames';
import Icon from './../../elements/icon/icon';
import Results from './results';

const KEYS = {
    upArrow: 38,
    downArrow: 40,
    enter: 13
};

/*
3 support results types:

['test', 'test']

[
    {
        title: 'test',
        description: 'testing'
    }
]

{
    animal: ['cat', 'dog']
}
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
        onChoice: React.PropTypes.func,
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
        onChoice: function noop() {},
        placeholder: 'Search...',
        value: ''
    };

    /* eslint-disable */
    static Components = {
        Results: Results,
        Icon: Icon
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        this.state = {
            focus: false,
            indexFocusCategory: null,
            indexFocusItem: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.results !== this.props.results) {
            this.clearIndexFocus();
        }
    }

    onFocus = () => {
        this.setFocus(true);

        this.clearIndexFocus();
    }

    onChange = (e) => {
        this.props.onChange(e);

        this.setFocus(true);

        this.clearIndexFocus();
    }

    onChoice = (e, child) => {
        this.props.onChoice(e, child);

        this.setFocus(false);
        this.clearIndexFocus();
    }

    onBlur = () => {
        this.setFocus(false);
        this.clearIndexFocus();
    }

    onKeyDown = (e) => {
        let results = this.props.results;

        if (Array.isArray(results)) {
            this.changeFocusItemTypeArray(e);

            return;
        }

        if (typeof results === 'object') {
            this.changeFocusItemTypeObject(e);
        }
    }

    changeFocusItemTypeArray(e) {
        let { indexFocusItem } = this.state;
        let { results } = this.props;
        let lengthResults = results.length - 1;
        

        // ArrowDown
        if (e.keyCode === KEYS.downArrow) {
            e.preventDefault();

            if (indexFocusItem !== lengthResults) {
                this.setState({
                    indexFocusItem: indexFocusItem === null ? 0 : ++indexFocusItem
                });
            }
        }

        // ArrowUp
        if (e.keyCode === KEYS.upArrow) {
            e.preventDefault();

            if (indexFocusItem >= 1) {
                this.setState({
                    indexFocusItem: --indexFocusItem
                });
            }
        }

        // Enter
        if (e.keyCode === KEYS.enter) {
            let child = results[indexFocusItem];

            if (typeof child !== 'undefined') {
                this.onChoice(e, this.getChild(child));
            }
        }
    }

    changeFocusItemTypeObject(e) {
        let { indexFocusItem, indexFocusCategory } = this.state;
        let { results } = this.props;
        let categories = Object.keys(results);
        let categoriesLength = categories.length - 1;

        // ArrowDown
        if (e.keyCode === KEYS.downArrow) {
            e.preventDefault();

            if (indexFocusCategory === null) {
                this.setState({
                    indexFocusItem: 0,
                    indexFocusCategory: 0
                });

                return;
            }

            let lengthCurrentArray = results[categories[indexFocusCategory]].length - 1;

            if (indexFocusItem !== lengthCurrentArray) {
                this.setState({
                    indexFocusItem: ++indexFocusItem,
                    indexFocusCategory: indexFocusCategory
                });

                return;
            }

            if (categoriesLength !== indexFocusCategory) {
                this.setState({
                    indexFocusItem: 0,
                    indexFocusCategory: ++indexFocusCategory
                });

                return;
            }
        }

        // ArrowUp
        if (e.keyCode === KEYS.upArrow) {
            e.preventDefault();

            if (indexFocusCategory === null) {
                this.setState({
                    indexFocusItem: results[categories[categories.length - 1]].length - 1,
                    indexFocusCategory: categories.length - 1
                });

                return;
            }

            if (indexFocusItem >= 1) {
                this.setState({
                    indexFocusItem: --indexFocusItem,
                    indexFocusCategory: indexFocusCategory
                });

                return;
            }

            if (indexFocusCategory >= 1) {
                this.setState({
                    indexFocusItem: results[categories[--indexFocusCategory]].length - 1,
                    indexFocusCategory: indexFocusCategory
                });

                return;
            }
        }

        // Enter
        if (e.keyCode === KEYS.enter) {
            let child = results[categories[indexFocusCategory]][indexFocusItem];

            if (typeof child !== 'undefined') {
                this.onChoice(e, this.getChild(child));
            }
        }
    }

    getChild(data) {
        return typeof data === 'object' ? data.title : data;
    }

    setFocus(newState) {
        if (this.state.focus !== newState) {
            this.setState({
                focus: newState
            });
        }
    }

    clearIndexFocus() {
        if (this.state.indexFocusItem !== null) {
            this.setState({
                indexFocusItem: null,
                indexFocusCategory: null
            });
        }
    }

    renderInput() {
        return (
            <div className={this.getClassesInput()}
                 key="searchInput"
            >
                <input className="prompt"
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
                    placeholder={this.props.placeholder}
                    type="text"
                    value={this.props.value}/>
                {this.renderInputIcon()}
            </div>
        );
    }

    renderInputIcon() {
        if (!this.props.icon) return null;

        return <Search.Components.Icon name={this.props.icon} />;
    }

    renderResults() {
        let props = {
            key: 'searchResults',
            emptyHeader: this.props.emptyHeader,
            emptyMessage: this.props.emptyMessage,
            onChoice: this.onChoice,
            results: this.state.focus ? this.props.results : [],
            search: this.props.value || '',
            indexFocusItem: this.state.indexFocusItem,
            indexFocusCategory: this.state.indexFocusCategory
        };

        return (
            <Transition
                key="transition"
                component={false}
                enter={this.props.enterAnimation}
                leave={this.props.leaveAnimation}
            >
                {(this.state.focus && this.props.value !== '') &&
                    <Search.Components.Results {...props}/>
                }
            </Transition>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, enterAnimation, icon, leaveAnimation, loading,
              onChange, placeholder, results, onChoice,
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
