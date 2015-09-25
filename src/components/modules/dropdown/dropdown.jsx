import React, { Component } from 'react';
import classNames from 'classnames';

export class Dropdown extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        error: React.PropTypes.bool,
        fluid: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        labeled: React.PropTypes.bool,
        multiple: React.PropTypes.bool,
        search: React.PropTypes.bool,
        selection: React.PropTypes.bool,
        visible: React.PropTypes.bool
    };

    static childContextTypes = {
        isDropdownChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };
    
    constructor(props) {
        super(props);
    }
    
    getChildContext() {
        return {
            isDropdownChild: true
        };
    }


    /*
    setSearchFocus() {
        this.searchFocused = true;
    }

    setSearchBlur() {
        this.searchFocused = false;

        // prevent the search and selection from overlapping
        ReactDOM.findDOMNode(this.refs.searchBox).value = "";
    }

    renderSearch() {
        let children = [];

        children.push(
           <input key="search"
                  className="search"
                  onChange={this.props.onChange}
                  onFocus={this.setSearchFocus.bind(this)}
                  onBlur={this.setSearchBlur.bind(this)}
                  ref="searchBox"
            />
        );

        return children;
    }

    renderInput() {
        // probably be better to handle the second case as this.refs.searchBox.hasFocus
        let textClasses = {
            default: (!this.props.displayValue && !this.props.inputValue) || this.searchFocused,
            text: true
        } 

        let children = []

        children.push(
            <input type="hidden"
                   key="input" 
                   name={this.props.inputName || 'input'}
                   value={this.props.inputValue}
            />
        );

        if (!this.props.multiple) {
            children.push(
                <div className={classNames(textClasses)} 
                     key="display">{this.props.displayValue || this.props.inputValue || this.props.default}
                </div>
            );  
        }

        return children;
    }
    */

    render() {
        let { component, disabled, inverted, multiple, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        if (this.props.component == Dropdown) {
            component = 'div';
        } else{
            component = this.props.component;
        }

        return React.createElement(
            component,
            other, 
            [
                this.props.children
            ]
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning

            // types
            selection: this.props.selection,
            fluid: this.props.fluid,
            labeled: this.props.labeled,
            search: this.props.search,
            multiple: this.props.multiple,

            // state
            active: this.props.active,
            visible: this.props.visible,
            error: this.props.error,
            disabled: this.props.disabled,

            // component
            dropdown: this.props.defaultClasses

            // variations
        };

        return classes;
    }
}