import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Label } from '../../elements';
import { Menu } from '../../views';
import { Animations, Dropdown, Option } from '../../modules';
import classNames from 'classnames';
import OutsideClick from 'react-outsideclickhandler';

/**
 * A dropdown component intended to behave exactly as the
 * HTML select component.
 */
export class Select extends Component {
    static propTypes = {
        /**
         * True when the dropdown menu is in an active (open) state.
         */
        active: React.PropTypes.bool,

        /**
         * True if case matters when using searchable Selects.
         */
        case: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool,

        /**
         * The glyphWidth setting to use when expanding the textbox as you type. Taken from Semantic.
         */
        glyphWidth: React.PropTypes.number,

        /**
         * True when multiple selections are allowed.
         */
        multiple: React.PropTypes.bool,

        /**
         * The name of the hidden text field to use for form submission purposes.
         */
        name: React.PropTypes.string,

        /**
         * The string of text to use when there are no results available.
         */
        noResults: React.PropTypes.string,

        /**
         * The string of text to use when the search box is empty
         */
        placeholder: React.PropTypes.string,

        /**
         * True when the select box allows searching
         */
        search: React.PropTypes.bool
    };

    static defaultProps = {
        case: false,
        defaultClasses: true,
        glyphWidth: 1.0714,
        noResults: 'No results found...'
    };

    constructor(props) {
        super(props);

        this.animation = {
            enter: {
                duration: 150,
                easing: 'in-cubic',
                from: {
                    opacity: 0,
                    transform: 'scaleY(0)',
                    transformOrigin: 'top center',
                    WebkitTransform: 'scaleY(0)',
                    WebkitTransformOrigin: 'top center'
                },
                to: {
                    opacity: 1,
                    transform: 'scaleY(1)',
                    transformOrigin: 'top center',
                    WebkitTransform: 'scaleY(1)',
                    WebkitTransformOrigin: 'top center'
                }
            }
        };

        this.animation.leave = {
            duration: 150,
            easing: 'out-cubic',
            from: this.animation.enter.to,
            to: this.animation.enter.from
        };

        this.start = this.animation.enter.from;
        this.leave = this.animation.enter.to;
        this.duration = 200;
        this.easing = 'in-circ';

        this.state = {
            active: false,
            error: false,
            selected: props.multiple ? [] : null
        }

        // we don't want this modifying state
        this.validOptions = []
    }

    componentWillMount() {
        // adds all child values to the validOptions array
        React.Children.forEach(this.props.children, child => {
            this.validOptions[child.props.children] = child.props.value;     
        });
    }

    shouldComponentUpdate(props, state) {
        // prevents duplicate states from rerendering. happens frequently with 
        // this many onclick handlers, and the only expected prop change that 
        // would warrant a re-render is the child length
        if (this.state === state) {
            // children remain the same.
            if (props.children.length === this.props.children.length) {
                return false;
            } else {
                return true;
            }
        }

        return true;
    }

    onAnimationComplete() {
        // visible state differs from active in that it
        // cna only change after completion of the animation
        if (!this.state.active) {
            this.setState({
                visible: false
            })
        }

    }

    onDocumentClick() {
        // clicking anywhere but component

        // if the search value is non-empty and the state is active but there's no valid selection, it's an error
        if (this.refs.search.value && this.state.active && !this.state.error && this.state.selected.length == 0) {
            this.setState({
                error: true
            });
        // if the state is active and there is no error we can close it
        } else if (this.state.active && !this.state.error) {
            this.setState({
                active: false
            });
        }
    }

    onClick(e) {
        // clicking the arrow/search box or dropdown area
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setFocus();

        if (!this.state.active) {
            this.setState({
                active: true,
                visible: true
            });
        }
    }

    onCloseOption(name, e) {
        // pressing the x on a multiple select
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        let selected = this.getSelected(name)

        this.refs.search.value = '';

        this.setState({
            selected: selected
        });
    }

    onLabelClick(name, e) {
        // clicking the label of a multiple select
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    onOptionClick(name, e) {
        // click an option
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        let selected = this.getSelected(name)

        this.refs.search.value = '';

        // if it's multiple, don't close it just set the state and refocus the element
        if (this.props.multiple) {
            this.setState({
                selected: selected
            });

            this.setFocus();
        } else {
            this.setState({
                active: false,
                selected: selected
            });
        }

    }

    onSearchKeyDown(e) {
        // pressing the enter key when a multiple select
        if (e.which === 13 && this.props.multiple) {
            let match = false;
            let target = this.props.case ? e.target.value : e.target.value.toLowerCase();

            for (let name in this.validOptions) {
                let text = this.props.case ? name : name.toLowerCase();

                if (text == target) {
                    match = name;
                    break;
                }
            }

            // target matches a valid select
            if (match) {
                if (this.props.multiple) {
                    this.refs.search.value = '';
                }

                this.setState({
                    error: false,
                    selected: this.getSelected(match)
                });
            } else {
                this.setState({
                    error: true
                });
            }

        // delete
        } else if (e.which === 8 && this.refs.search.value == '' && this.props.multiple) {
            let selected = this.popSelected();

            if (selected) {
                this.setState({
                    selected: selected
                })
            }
        }
    }

    onSearchChange() {
        this.setState({
            active: true,
            error: false
        });
    }

    renderChildren() {
        let children = React.Children.toArray(this.props.children);
        let search = this.refs.search ? this.refs.search.value : null;
        let flags = this.props.case ? 'g' : 'gi';
        let newChildren = [];

        children.forEach(child => {
            if (child.type === Option) {
                let match = true;
                let selected = false;

                // search box handling
                if (search) {
                    let regex = new RegExp(search, flags);

                    if (!regex.test(child.props.children)) {
                        match = false;
                    }
                }

                if (this.props.multiple) {
                    if (this.state.selected.indexOf(child.props.children) > -1) {
                        selected = true;
                    }
                }

                if (match && !selected) {
                    newChildren.push(
                        React.cloneElement(
                            child,
                            {
                                 active: this.state.selected == child.props.children && !this.props.search,
                                onClick: this.onOptionClick.bind(this, child.props.children)
                            },
                            child.props.children
                        )
                    );
                }

            }
        });

        return newChildren;
    }

    // there isn't a very clean way to animate this since Semantics CSS isn't TransitionGroup 
    // friendly.
    renderLabels() {
        if (this.props.multiple) {
            return this.state.selected.map(label => {
                return (
                    <Label 
                        component="a"
                        key={label}
                        onClick={this.onLabelClick.bind(this, label)}
                        style={{ display: 'inline-block' }}
                    >
                        {label}
                        <Icon 
                            name="close"
                            onClick={this.onCloseOption.bind(this, label)}
                        />
                    </Label>
                );
            });
        }
    }

    renderSearch() {
        let style = {};
        let width = this.refs.search ? this.refs.search.value.length * this.props.glyphWidth : null;

        if (width) {
            style.width = width + 'em';
        }

        return this.props.search ? 
            <input
                className="search"
                onChange={this.onSearchChange.bind(this)}
                onKeyDown={this.onSearchKeyDown.bind(this)}
                ref="search"
                style={style}
                tabIndex="0"
            />
            : false;
    }

    renderText() {
        return (
            <div className={classNames(this.getTextClasses())}>
                {this.state.selected && !this.props.multiple ? this.state.selected : this.props.placeholder}
            </div>
        );
    }

    render() {
        let { active, multiple, search, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());
        other.onClick = this.onClick.bind(this);

        let children = this.renderChildren();

        if (React.Children.count(children) == 0) {
            children = (
                <div
                    className="message"
                >
                    {this.props.noResults}
                </div>
            );
        }

        return (
            <OutsideClick 
                onOutsideClick={this.onDocumentClick.bind(this)}
            >
                <Dropdown
                    {...other}
                    active={this.state.active} 
                    visible={this.state.visible}
                >
                    <input 
                        name={this.props.name}
                        type="hidden"
                        value={this.formatValue()}
                    />
                    <Icon 
                        name="dropdown"

                    />
                    {this.renderLabels()}
                    {this.renderSearch()}
                    {this.renderText()}
                    <Animations
                        active={this.state.active}
                        animate={this.state.active}
                        component={Menu}
                        end={this.animation.leave}
                        onComplete={this.onAnimationComplete.bind(this)}
                        start={this.animation.enter}
                    >
                        {children}
                    </Animations>
                </Dropdown>
            </OutsideClick>
        ); 
    }

    formatValue() {
        if (this.props.multiple) {
            // return this.state.selected.join(', ');
            let selected = [];

            this.state.selected.forEach(item => {
                selected.push(this.validOptions[item]);       
            });

            return selected.join(', ');
        } else {
            return this.validOptions[this.state.selected];
        }
    }

    getTextClasses() {
        return {
            default: !this.state.selected || this.props.multiple,
            filtered: this.refs.search && this.refs.search.value.length > 0,
            text: true
        }
    }

    getClasses() {
        return {
            // default
            active: this.props.active,
            // positioning

            // types
            selection: true,
            search: this.props.search,

            // state
            error: this.state.error,

            // component
            multiple: this.props.multiple

            // variations
        };
    }

    getSelected(name) {
        let clone = name;

        if (this.props.multiple) {
            let index = this.state.selected.indexOf(name);
            clone = this.state.selected.slice(0);

            if (index > -1) {
                clone.splice(index, 1);
            } else {
                clone.push(name);
            }       
        }

        return clone;
    }

    popSelected() {
        let clone = this.state.selected.splice(0);

        if (clone.length == 0 || !this.props.multiple) {
            return false;
        } else {
            clone.pop();
            return clone;
        }
    }

    setFocus() {
        if (this.props.search) {
            ReactDOM.findDOMNode(this.refs.search).focus();
        }
    }
}