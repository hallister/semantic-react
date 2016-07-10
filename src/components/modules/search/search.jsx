import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Motion, spring } from 'react-motion';
import Measure from 'react-measure';
import classNames from 'classnames';
import Icon from './../../elements/icon/icon';
import Results from './results';
import DefaultProps from '../../defaultProps';
import AnimationProps, { getMotionStyle } from '../../animationUtils';

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
        ...DefaultProps.propTypes,
        ...AnimationProps.propTypes,
        emptyHeader: React.PropTypes.string,
        emptyMessage: React.PropTypes.string,
        icon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
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
        ...DefaultProps.defaultProps,
        initialAnimation: {
            opacity: 0,
            scale: 0
        },
        enterAnimation: {
            opacity: spring(1, { stiffness: 800, damping: 40, precision: 0.1 }),
            scale: spring(1, { stiffness: 800, damping: 40, precision: 0.1 })
        },
        leaveAnimation: {
            opacity: spring(0, { stiffness: 800, damping: 40, precision: 0.1 }),
            scale: spring(0, { stiffness: 800, damping: 40, precision: 0.1 })
        },
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
            resultsHeight: 1,
            resultsWidth: 1,
            focus: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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

    /**
     * Results dimensions was changed
     * @param dimensions
     */
    onMeasure = (dimensions) => {
        if (dimensions &&
            ((dimensions.height && dimensions.height !== this.state.resultsHeight) ||
            (dimensions.width && dimensions.width !== this.state.resultsWidth))) {
            this.setState({
                resultsHeight: dimensions.height,
                resultsWidth: dimensions.width
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

    getAnimationStyle(interpolatedStyle, dimensions) {
        const { onAnimationStyle } = this.props;
        if (onAnimationStyle) {
            return onAnimationStyle(interpolatedStyle, dimensions);
        }
        return {
            transform: `scale(${interpolatedStyle.scale})`,
            opacity: interpolatedStyle.opacity
        };
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

        const { initialAnimation, enterAnimation, leaveAnimation } = this.props;
        const motionStyle = getMotionStyle(initialAnimation, enterAnimation, leaveAnimation, !!(this.state.focus && this.props.value !== ''));

        return (
            <Motion defaultStyle={initialAnimation}
                    style={motionStyle}
            >
                {interpolatedStyle => {
                    const animationStyle = this.getAnimationStyle(interpolatedStyle, { height: this.state.resultsHeight, width: this.state.resultsWidth });
                    return (
                        <Measure whitelist={['height', 'width']}
                                 accurate
                                 onMeasure={this.onMeasure}
                                 key="measure"
                        >
                            <Search.Components.Results {...resultProps} style={animationStyle} key="results"/>
                        </Measure>
                    );
                }}
            </Motion>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, emptyHeader,
              emptyMessage, initialAnimation, enterAnimation, icon, leaveAnimation, loading,
              onChange, onSearchClick, placeholder, results, onAnimationStyle,
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
