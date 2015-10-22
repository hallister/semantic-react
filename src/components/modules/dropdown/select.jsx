import React from 'react';
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
export class Select extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool,
        enterAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        fluid: React.PropTypes.bool,
        glyphWidth: React.PropTypes.number,
        ignoreCase: React.PropTypes.bool,
        leaveAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        multiple: React.PropTypes.bool,
        name: React.PropTypes.string,
        noResults: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        search: React.PropTypes.bool
    };

    static defaultProps = {
        ignoreCase: true,
        defaultClasses: true,
        glyphWidth: 1.0714,
        noResults: 'No results found...'
    };

    constructor(props) {
        super(props);

        // animations should just move these to props
        this.animation = {
            enter: this.props.enterAnimation || {
                duration: 150,
                easing: 'out-circ',
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

        this.animation.leave = this.props.leaveAnimation || {
            duration: 150,
            easing: 'out-cubic',
            from: this.animation.enter.to,
            to: this.animation.enter.from
        };

        // we don't want this modifying state
        this.validOptions = {}

        this.state = {
            active: false,
            error: false,
            selected: props.multiple ? [] : null,
            visible: false
        }
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
        // this should be doing the same thing as the enter key before it closes

        let match = this.isMatch();

        // the text box itself is a match
        if (match) {
            if (this.props.multiple) {
                this.refs.search.value = '';
            }

            this.setState({
                active: false,
                error: false,
                selected: this.getSelected(match)
            });
        // if the search value is non-empty and the state is active but there's no valid selection, it's an error
        } else if (this.refs.search.value && this.state.active && !this.state.error && this.state.selected.length == 0) {
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
            let match = this.isMatch();

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
                // not match, error
                this.setState({
                    error: true
                });
            }

        // pressing delete when there is an empty search box using a multiple select
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
        // anytime we modify the text box, remove the error
        this.setState({
            error: false
        });
    }

    renderChildren() {
        let search = this.refs.search ? this.refs.search.value : null;
        let flags = this.props.ignoreCase ? 'gi' : 'g';
        let newChildren = [];

        // we can't map children because we need to know when length is zero
        React.Children.forEach(this.props.children, child => {
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

                // check if this child is in the selection array
                if (this.props.multiple) {
                    // is this value in the selected array of a multiple select
                    if (this.state.selected.indexOf(child.props.children) > -1) {
                        selected = true;
                    }
                }

                if (match && !selected) {
                    newChildren.push(
                        React.cloneElement(
                            child,
                            {
                                key: child.props.children,
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

    renderLabels() {
        // can't animate while ReactTransitionGroup
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

        // expand the width of the search box as you type. no max?
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
        let { active, multiple, search, ignoreCase, name, placeholder,
              glyphWidth, defaultClasses, noResults, ...other } = this.props;

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

    // value formating for the hidden input box
    formatValue() {
        if (this.props.multiple) {
            let selected = [];

            // maybe just string and slice it instead of allocating an array
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
            fluid: this.props.fluid,

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

    isMatch() {
        let match = false;
        let target = this.props.ignoreCase ? this.refs.search.value.toLowerCase() : this.refs.search.value;

        for (let name in this.validOptions) {
            let text = this.props.ignoreCase ? name.toLowerCase() : name;

            if (text == target) {
                match = name;
                break;
            }
        }

        return match;
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
