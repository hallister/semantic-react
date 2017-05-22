import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './../../elements/icon/icon';
import Results from './results';
import DefaultProps from '../../defaultProps';
import SemanticCSSTransition from '../../animation/animation';
import AnimationProps from '../../animation/animationProps';

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
export default class Search extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        ...AnimationProps.propTypes,
        emptyHeader: PropTypes.string,
        emptyMessage: PropTypes.string,
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        loading: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        onSearchClick: PropTypes.func,
        placeholder: PropTypes.string,
        results: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]),
        value: PropTypes.string
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        ...AnimationProps.defaultProps,
        enter: 'scale in',
        leave: 'scale out',
        enterDuration: 200,
        leaveDuration: 200,
        icon: 'search',
        onSearchClick: function noop() {},
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
            focus: false
        };
    }

    onBlur = () => {
        if (this.state.focus) {
            this.setState({
                focus: false
            });
        }
    }

    onChange = (e) => {
        this.props.onChange(e);
    }

    onFocus = () => {
        this.setState({
            focus: true
        });
    }

    onSearchClick = (e, child) => {
        this.props.onSearchClick(e, child);
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
        const resultProps = {
            key: 'searchResults',
            emptyHeader: this.props.emptyHeader,
            emptyMessage: this.props.emptyMessage,
            onSearchClick: this.onSearchClick,
            results: this.state.focus ? this.props.results : [],
            search: this.props.value || ''
        };

        const { enter, leave, enterDuration, leaveDuration } = this.props;

        return (
            <SemanticCSSTransition
                enter={enter}
                leave={leave}
                enterDuration={enterDuration}
                leaveDuration={leaveDuration}
            >
                {this.state.focus && this.props.value !== '' &&
                <Search.Components.Results {...resultProps} key="results"/>
                }
            </SemanticCSSTransition>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, initialAnimation, enterAnimation, icon, leaveAnimation, loading,
              onChange, onSearchClick, placeholder, results, onAnimationStyle, value,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}>
                {this.renderInput()},
                {this.renderResults()}
            </Component>
        )
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
