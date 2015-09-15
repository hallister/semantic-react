import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getChild } from '../../utilities';
import { Segment, Content, Item, Icon, Label } from '../../elements';
import { Menu } from '../../views';
import { Animate, Dropdown, Option } from '../../modules';
import classNames from 'classnames';
import OutsideClick from 'react-outsideclickhandler';

export class Select extends Component {
    static propTypes = {

    };

    static defaultProps = {
        case: false,
        defaultClasses: true,
        glyphWidth: 1.0714,
        noResults: 'No results found...'
    };

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            error: false,
            selected: props.multiple ? [] : null
        }

        // we don't want this modifying state
        this.validOptions = []
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

    componentWillMount() {
        React.Children.forEach(this.props.children, child => {
            this.validOptions[child.props.children] = child.props.value;     
        });
    }

    // clicking anywhere but component
    onDocumentClick(e) {
        console.log('onDocumentClick');
        this.setState({
            active: false
        })
    }

    onClick(e) {
        console.log('onClick');
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setFocus();

        this.setState({
            active: true,
            visible: true
        });
    }

    onLabelClick(name, e) {
        
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation(); 
    }

    onOptionClick(name, e) {
        console.log('onOptionClick');
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        let selected = this.getSelected(name)

        this.refs.search.value = '';

        this.setState({
            active: false,
            selected: selected
        });
    }

    // prevents this.onClick from closing when the search bar is clicked
    onSearchInputClick(e) {
        console.log('onSearchInputClick');
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setState({
            active: !this.state.active
        });
    }

    // for some reason this causes issues with onOptionClick if the field is blank.
    onSearchChange(e) {
        console.log('onSearchChange');
        if (this.refs.search && this.refs.search.value) {
            this.setState({
                active: true,
                visible: true
            });   
        }
    }

    onSearchBlur(e) {
        console.log('onSearchBlur');
        let match = false;
        let target = this.props.case ? e.target.value : e.target.value.toLowerCase();

        for (let name in this.validOptions) {
            let text = this.props.case ? name : name.toLowerCase();

            if (text == target) {
                match = name;
                break;
            }
        }

        if (match) {
            if (this.props.multiple) {
                this.refs.search.value = '';
            }

            this.setState({
                active: true,
                visible: true,
                selected: this.getSelected(match)
            });
        } else {
            this.setState({
                active: true,
                visible: true
            });
        }
    }

    // animation is complete
    // we could use to only set the dropdown active state after the menu animation
    onSearchComplete(e) {
        
        this.setState({
            visible: false,
            active: false
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
                                ...child.props,
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

    renderSearch() {
        let style = {};
        let width = this.refs.search ? this.refs.search.value.length * this.props.glyphWidth : null;

        if (width) {
            style.width = width + 'em';
        }

        return this.props.search ? 
            <input className="search" 
                   tabIndex="0" 
                   ref="search"
                   onChange={this.onSearchChange.bind(this)}
                   onBlur={this.onSearchBlur.bind(this)}
                   style={style}
                   
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

    // there isn't a very clean way to animate this since Semantics CSS isn't TransitionGroup 
    // friendly.
    renderLabels() {
        if (this.props.multiple) {
            return this.state.selected.map(label => {
                return (
                    <Label component="a" 
                           onClick={this.onLabelClick.bind(this, label)}
                           key={label}
                           style={{display: 'inline-block'}}
                    >
                        {label}
                        <Icon name="close"
                              onClick={this.onOptionClick.bind(this, label)}/>
                    </Label>
                );
            });
        }
    }

    render() {
        let { active, multiple, search, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());
        other.onClick = this.onClick.bind(this);

        let animation =  {
            state: this.state.active,
            enterState: {
                name: 'slideIn',
                duration: 250,
                options: {
                    easing: 'cubic-in'
                }
            },
            exitState: {
                name: 'slideOut',
                duration: 250,
                options: {
                    easing: 'cubic-out',
                    onComplete: this.onSearchComplete.bind(this)
                }
            }
        };

        let children = this.renderChildren();

        if (React.Children.count(children) == 0) {
            children = <div className="message">{this.props.noResults}</div>;
        };

        return (
            <OutsideClick onOutsideClick={this.onDocumentClick.bind(this)}>
                <Dropdown {...other} active={this.state.active} visible={this.state.visible}>
                    <input type="hidden" name={this.props.name} value={this.formatValue()} />
                    <Icon name="dropdown" 
                          onClick={this.onSearchInputClick.bind(this)}/>
                    {this.renderLabels()}
                    {this.renderSearch()}
                    {this.renderText()}
                    <Menu animation={animation} active={this.state.active}>
                        {children}
                    </Menu>
                </Dropdown>
            </OutsideClick>
        ); 
    }

    formatValue() {
        if (this.props.multiple) {
            //return this.state.selected.join(', ');
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
        let classes = {
            default: !!!this.state.selected || this.props.multiple,
            filtered: this.refs.search && this.refs.search.value.length > 0,
            text: true
        }

        return classes;
    }

    getClasses() {
        let classes = {
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

        return classes;
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

    setFocus() {
        if (this.props.search) {
            ReactDOM.findDOMNode(this.refs.search).focus();
        }
    }
}