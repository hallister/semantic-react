import React from 'react';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import EventListener from 'react-event-listener';
import Transition from 'react-motion-ui-pack';
import DropdownElement from './dropdownelement';
import { Label, Icon, Header } from '../../elements';
import { Menu } from '../../views';
import { isNodeInRoot } from '../../utilities';

/**
 * Select is the dropdown where options could be selected, either single or multiple.
 * Also supports search
 */
export default class Select extends React.Component {
    static propTypes = {
        ...DropdownElement.propTypes,
        /**
         * Should be dropdown opened
         */
        active: React.PropTypes.bool,
        /**
         * Enter animation
         */
        enterAnimation: React.PropTypes.object,
        /**
         * Leave animation
         */
        leaveAnimation: React.PropTypes.object,
        /**
         * Name for dropdown input
         */
        name: React.PropTypes.string,
        /**
         * Icon name for dropdown
         */
        icon: React.PropTypes.string,
        /**
         * String used as placeholder if dropdown has no selected value
         * Will be grayed (<div class="default text">) if dropdown is selection 
         * or normally displayed (<div class="text">) otherwise
         */
        placeholder: React.PropTypes.string,
        /**
         * Searchable dropdown
         */
        search: React.PropTypes.bool,
        /**
         * Search glyph width
         */
        searchGlyphWidth: React.PropTypes.number,
        /**
         * Ignore case when performing search
         */
        searchIgnoreCase: React.PropTypes.bool,
        /**
         * Search box position
         */
        searchPosition: React.PropTypes.oneOf([
            'dropdown', 'menu'
        ]),
        /**
         * Search header, valid only for searchPosition="menu"
         */
        searchHeader: React.PropTypes.string,
        /**
         * Specify message which will be displayed when search has no results
         */
        searchNoResultsMessage: React.PropTypes.string,
        /**
         * Behave dropdown as HTML select
         */
        selection: React.PropTypes.bool,
        /**
         * Allow multiple selection
         */
        multiple: React.PropTypes.bool,
        /**
         * Callback will be called when current selected value was changed. Will pass array of selected values
         */
        onSelectChange: React.PropTypes.func
    };
    
    static defaultProps = {
        ...DropdownElement.defaultProps,
        active: false,
        icon: 'dropdown',
        search: false,
        searchGlyphWidth: 1.0714,
        searchPosition: 'dropdown',
        searchIgnoreCase: true,
        searchNoResultsMessage: 'No Results found.',
        selection: false,
        multiple: false,
        enterAnimation: {
            height: 'auto'
        },
        leaveAnimation: {
            height: 0
        },
        onSelectChange: () => {}
    };
    
    constructor(props) {
        super(props);

        /**
         * Menu reference
         */
        this.menuRef = null;
        this.searchRef = null;
        this.noResultsMessageRef = null;
        
        this.state = {
            active: props.active,
            selected: [],
            searchString: ''
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.active && this.state.active !== nextProps.active) {
            this.setState({
                active: nextProps.active
            });
        }
    }

    /**
     * Handler for clicking on dropdown
     */
    onDropdownClick = () => {
        this.setState({
            active: !this.state.active
        });
    };

    /**
     * Handler for outside click
     */
    onOutsideDropdownClick = (event) => {
        if (!this.state.active || !this.menuRef) {
            return;
        }
        const menuElement = ReactDOM.findDOMNode(this.menuRef);
        if (menuElement) {
            if (!isNodeInRoot(event.target, menuElement)) {
                this.setState({
                    active: false
                })
            }
        }
    };

    /**
     * Handler for menu item click
     * @param value
     */
    onMenuItemClick = (value) => {
        if (this.state.selected.indexOf(value) === -1) {
            let newState = {
                selected: [...this.state.selected, value]
            };
            
            // Intelligently handle multiple select here:
            // Do not close if selecting and there are more than 1 element left in menu
            // Set focus to search box if searchable
            // Close if menu has only 1 element
            if (this.props.multiple && this.menuRef) {
                let optionsCount = React.Children.count(this.menuRef.props.children);
                if (optionsCount <= 1) {
                    // Can close menu here
                    newState.active = false;
                } else {
                    // we have few more elements here, put focus if searchable
                    /* eslint-disable no-lonely-if */
                    if (this.props.search && this.searchRef) {
                        this.searchRef.focus();
                    }
                    /* eslint-enable no-lonely-if */
                }
            } else {
                // Non multiple select or ref is not available?
                newState.active = false;
            }
            this.setState(newState);
            this.props.onSelectChange(newState.selected);
        }
    };

    /**
     * Handler for close label click
     * @param value
     */
    onLabelCloseIconClick(value) {
        let index = this.state.selected.indexOf(value);
        if (index !== -1) {
            this.setState({
                selected: [...this.state.selected.filter(val => val !== value)]
            });
        }
    }

    /**
     * Handler for search input change
     */
    onSearchInputChange = () => {
        
    };

    /**
     * Handler for search input key events
     * @param {React.KeyboardEvent} event
     */
    onSearchInputKeyDown = (event) => {
        switch (event.which) {
            // Enter
            case 13:
                // only do something if we have search results available and not displaying not results message
                if (this.menuRef && !this.noResultsMessageRef && React.Children.count(this.menuRef.props.children) > 0) {
                    // get the first children
                    let child = React.Children.toArray(this.menuRef.props.children)[0];
                    if (child && child.props.value) {
                        // enter should do the same as menu item click
                        this.onMenuItemClick(child.props.value);
                        // but clean search box additionally
                        this.setState({
                            searchString: ''
                        });
                    }
                }
                break;
            // Backspace
            case 8:
                if (this.state.searchString === '') {
                    if (this.props.multiple && this.state.selected.length > 0) {
                        this.setState({
                            selected: [...this.state.selected.slice(0, -1)]
                        });
                    }
                } else if (this.searchRef) {
                    this.setState({
                        searchString: this.searchRef.value
                    });
                }
                break;
            default:
                if (this.searchRef) {
                    this.setState({
                        searchString: this.searchRef.value
                    });
                }
        }
    };
    

    /**
     * Renders dropdown hidden input 
     */
    renderDropdownInput() {
        const { name } = this.props;
        const value = this.state.selected.join(',');
        return (
            <input name={name} 
                   type="hidden" 
                   value={value} />
        );
    }

    /**
     * Renders dropdown labels for multiple type dropdowns
     */
    renderDropdownLabels() {
        // Selection labels should appear only for multiple dropdowns
        if (!this.props.multiple) {
            return null;
        }
        
        return React.Children.map(this.props.children, child => {
            // Process only option or option like childs and if it's selected
            if (child.props.value && this.state.selected.indexOf(child.props.value) !== -1) {
                return (
                    <Label component="a"
                           key={`label-${child.props.value}`}
                           style={{ display: 'inline-block' }}
                    >
                        {child.props.children}
                        <Icon name="close"
                              onClick={this.onLabelCloseIconClick.bind(this, child.props.value)}/>
                    </Label>
                );
            }
        });
    }

    /**
     * Render dropdown placeholder text
     */
    renderDropdownText() {
        const { placeholder } = this.props;
        // Render placeholder if not selected 
        if (this.state.selected.length === 0) {
            if (typeof placeholder !== 'undefined') {
                // Selection type should use default text, non selection text
                return (
                    <div className={this.props.selection ? 'default text' : 'text'}>{placeholder}</div>
                )
            } else {
                return null;
            }
        } else {
            // Need to render children content in text here if not multiple otherwise render placeholder anyway
            /* eslint-disable no-lonely-if */
            if (this.props.multiple) {
                return (
                    <div className={this.props.selection ? 'default text' : 'text'}>{placeholder}</div>
                );
            } else {
                let content = <span/>;
                // traverse in childs, find necessary node
                React.Children.forEach(this.props.children, child => {
                    if (child.props.value && this.state.selected.indexOf(child.props.value) !== -1) {
                        content = <div className="text">{child.props.children}</div>
                    } 
                });
                return content;
            }
            /* eslint-enable no-lonely-if */
        }
    }

    /**
     * Renders dropdown icon
     */
    renderDropdownIcon() {
        const { icon } = this.props;
        return (
            <Icon name={icon}/>
        )
    }

    /**
     * Renders search input
     */
    renderSearchInput() {
        // Do not render if not searchable
        if (!this.props.search) {
            return null;
        }
        
        const searchWidth = this.props.searchGlyphWidth * this.state.searchString.length;
        const style = searchWidth && this.props.searchPosition === 'dropdown' ? { width: `${searchWidth}em` } : {};
        return (
            <input autoComplete="off"
                   className="search" 
                   key="searchInput"
                   onKeyDown={throttle(this.onSearchInputKeyDown, 100)}
                   ref={ref => this.searchRef = ref}
                   style={style}
                   tabIndex={0}/>
        )
    }

    /**
     * Renders search header if specified
     */
    renderSearchHeader() {
        const { search, searchHeader } = this.props;
        if (search && searchHeader) {
            return (<Header key="searchHeader">{searchHeader}</Header>);
        } else {
            return null;
        }
    }

    /**
     * Filters children options to exclude selected elements or elements which doesn't match to search
     */
    renderFilteredChildren() {
        const selected = this.state.selected;
        const { search, searchIgnoreCase } = this.props;
        const searchString = this.state.searchString;
        const searchRegex  = new RegExp(searchString, searchIgnoreCase ? 'gi' : 'g');
        
        let newChildren = [];
        React.Children.forEach(this.props.children, child => {
            // only process option like childs
            if (child.props.value) {
                let match = true;
                if (search && searchString !== '') {
                    // value could be int or string. In case of int convert it to string
                    const value = (typeof child.props.value === 'number') ? Number.parseInt(child.props.value) : child.props.value;
                    match = (searchRegex.test(value) || searchRegex.test(child.props.children));
                }
                
                if (match && selected.indexOf(child.props.value) === -1) {
                    newChildren.push(React.cloneElement(
                        child, 
                        {
                            key: child.props.key ? child.props.key : child.props.value
                        }
                    ));
                }
            } else if (searchString === '') {
                // need to pass non option like childs, but only if search string is empty
                newChildren.push(React.cloneElement(
                    child,
                    {
                        key: child.props.key ? child.props.key : child.props.value
                    }
                ));
            }
        });
        return newChildren;
    }
    
    render() {
        const {
            children, enterAnimation, leaveAnimation, icon, name, search, searchPosition, searchHeader, searchNoResultsMessage,
            ...other
        } = this.props;
        
        // make new array for menu childrens
        let menuChildrens = [];
        // render search and header in menu
        if (search && searchPosition === 'menu') {
            if (searchHeader) {
                menuChildrens.push(this.renderSearchHeader());
            }
            menuChildrens.push(this.renderSearchInput());
        }
        
        let filteredChilds = this.renderFilteredChildren();
        // Display no results message instead of children if needed
        if ((!filteredChilds || filteredChilds.length === 0) && (search && this.state.searchString != '')) {
            filteredChilds = [
                <div className="message" key="noResultsMessage" ref={ref => this.noResultsMessageRef = ref}>
                    {searchNoResultsMessage}
                </div>
            ]; // eslint-disable-line
        }
        
        menuChildrens = menuChildrens.concat(filteredChilds);
        
        other.className = classNames(other.className, this.getClasses());
        
        return (
            <DropdownElement
                {...other}
                onClick={this.onDropdownClick}
                active={this.state.active}
            >
                {/* This will embed <noscript></noscript> inside dropdown div. Shouldn't cause any problems */}
                <EventListener elementName="document"
                               onMouseDown={this.onOutsideDropdownClick}
                               onTouchStart={this.onOutsideDropdownClick}/>
                {this.renderDropdownInput()}
                {this.renderDropdownLabels()}
                {this.renderDropdownText()}
                {this.renderDropdownIcon()}
                {search && searchPosition === 'dropdown' && 
                this.renderSearchInput()
                }
                <Transition
                    component={false}
                    enter={enterAnimation}
                    leave={leaveAnimation}
                >
                    {this.state.active &&
                    <Menu key="menu"
                          onMenuItemClick={this.onMenuItemClick}
                          ref={ref => this.menuRef = ref}
                          style={{ overflow: 'hidden' }}
                    >
                        {menuChildrens}
                    </Menu>
                    }
                </Transition>
            </DropdownElement>
        );
    }
    
    getClasses() {
        return {
            search: this.props.search,
            selection: this.props.selection,
            multiple: this.props.multiple
        }
    }
}