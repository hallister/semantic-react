import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getChild } from '../../utilities';
import { Segment, Content, Item } from '../../elements';
import { Menu } from '../../views';
import { Animate } from '../../modules';
import classNames from 'classnames';

export class Dropdown extends Component {
    static propTypes = {

    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    /*
    static contextTypes = {
        isDropdownChild: React.PropTypes.bool
    };
    */

    static childContextTypes = {
        isDropdownChild: React.PropTypes.bool
    };
    
    constructor(props) {
        super(props);

        //this.searchFocused = false;
    }
    
    getChildContext() {
        return {
            'isDropdownChild': true
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
        let { disabled, inverted, multiple, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
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