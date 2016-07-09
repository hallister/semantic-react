import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import EventListener from 'react-event-listener';
import { Motion, spring } from 'react-motion';
import Measure from 'react-measure';
import DropdownElement from './dropdownelement';
import Label from './../../elements/label/label';
import Icon from './../../elements/icon/icon';
import Header from './../../elements/header/header';
import Menu from './../../views/menu/menu';
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
         * Enter animation spring configuration. Pass false to disable
         */
        enterAnimation: React.PropTypes.oneOfType([
            React.PropTypes.shape({
                stiffness: React.PropTypes.number,
                damping: React.PropTypes.number,
                precision: React.PropTypes.number
            }),
            React.PropTypes.bool
        ]),
        /**
         * Leave animation spring configuration, pass false to disable
         */
        leaveAnimation: React.PropTypes.oneOfType([
            React.PropTypes.shape({
                stiffness: React.PropTypes.number,
                damping: React.PropTypes.number,
                precision: React.PropTypes.number
            }),
            React.PropTypes.bool
        ]),
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
         * Search string
         */
        searchString: React.PropTypes.string,
        /**
         * Selected value
         */
        selected: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])),
        /**
         * Behave dropdown as HTML select
         */
        selection: React.PropTypes.bool,
        /**
         * Allow multiple selection
         */
        multiple: React.PropTypes.bool,
        /**
         * Callback will be called when current selected value was changed.
         * Will pass array of new selected values as first param and total options count as second
         */
        onSelectChange: React.PropTypes.func,
        /**
         * Callback will be called when selection dropdown wants to be closed. For now only for outside of dropdown clicks
         */
        onRequestClose: React.PropTypes.func,
        /**
         * Callback will be called when search string is being changed. You probably just need to pass it back to component
         */
        onSearchStringChange: React.PropTypes.func

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
        searchString: '',
        selection: true,
        selected: [],
        multiple: false,
        enterAnimation: {
            stiffness: 700,
            damping: 50,
            precision: 40
        },
        leaveAnimation: {
            stiffness: 700,
            damping: 50,
            precision: 40
        },
        onSelectChange: () => {
        },
        onRequestClose: () => {
        },
        onSearchStringChange: () => {
        }
    };

    /* eslint-disable */
    static Components = {
        Label: Label,
        Icon: Icon,
        Header: Header,
        Menu: Menu,
        DropdownElement: DropdownElement
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        /**
         * Menu reference
         */
        this.menuRef = null;
        this.searchRef = null;
        this.noResultsMessageRef = null;

        this.state = {
            menuHeight: 1,
            animating: false
        };

        this.menuVisibleStyle = {
            display: 'block',
            overflowX: 'hidden',
            overflowY: 'auto'
        };

        this.menuHiddenStyle = {
            display: 'none',
            overflowX: 'hidden',
            overflowY: 'auto'
        };
    }

    componentDidMount() {
        const { active, search } = this.props;
        if (search && this.searchRef && active) {
            this.searchRef.focus();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active != nextProps.active) {
            this.setState({ animating: true });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    componentDidUpdate() {
        const { active, search } = this.props;
        if (search && this.searchRef && active) {
            this.searchRef.focus();
        }
    }

    /**
     * Handler for outside click
     */
    onOutsideDropdownClick = (event) => {
        const { active, onRequestClose } = this.props;
        if (!active) {
            return;
        }
        const element = ReactDOM.findDOMNode(this);
        if (element) {
            if (!isNodeInRoot(event.target, element)) {
                onRequestClose();
            }
        }
    };

    /**
     * Handler for menu item click
     * @param value
     */
    onMenuItemClick = (value) => {
        let { search, selected, multiple, onSelectChange, onSearchStringChange } = this.props;
        const optionsCount = (this.menuRef) ? React.Children.count(this.menuRef.props.children) : 0;
        if (selected.indexOf(value) === -1) {
            if (multiple) {
                // Append value for multiple
                onSelectChange([...selected, value], optionsCount);
            } else {
                // replace for single
                onSelectChange([value], optionsCount);
            }

            // Intelligently handle multiple select here:
            // Do not request close if selecting and there are more than 1 element left in menu
            // Set focus to search box if searchable
            // Close if menu has only 1 element
            if (multiple && this.menuRef) {
                if (optionsCount <= 1) {
                    // Clean search string
                    onSearchStringChange('');
                } else if (search && this.searchRef) {
                    // we have few more elements here, put focus if searchable
                    this.searchRef.focus();
                }
            } else if (this.searchRef) {
                // always clean search string for single selection dropdowns
                onSearchStringChange('');
            }
        }
    };

    /**
     * Handler for close label click
     * @param value
     */
    onLabelCloseIconClick(value) {
        const { selected, onSelectChange } = this.props;
        const optionsCount = (this.menuRef) ? React.Children.count(this.menuRef.props.children) : 0;
        const index = selected.indexOf(value);
        if (index !== -1) {
            onSelectChange([...selected.filter(val => val !== value)], optionsCount);
        }
    }

    /**
     * Handler for search input change
     * @param {React.KeyboardEvent} event
     */
    onSearchInputChange = (event) => {
        const { onSearchStringChange } = this.props;

        onSearchStringChange(event.target.value);
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
                    }
                }
                break;
            // Backspace
            case 8:
                const { multiple, searchString, selected, onSelectChange } = this.props;
                if (searchString === '') {
                    if (multiple && selected.length > 0) {
                        onSelectChange([...selected.slice(0, -1)])
                    }
                }
                break;
        }
    };

    onAnimationRest = () => {
        this.setState({ animating: false });
    };


    onMenuMeasure = (dimensions) => {
        if (dimensions.height && this.state.menuHeight !== dimensions.height) {
            this.setState({ menuHeight: dimensions.height });
        }
    };

    /**
     * Renders dropdown hidden input
     */
    renderDropdownInput() {
        const { name, selected } = this.props;
        const value = selected.join(',');

        return (
            <input name={name}
                   type="hidden"
                   value={value}/>
        );
    }

    /**
     * Renders dropdown labels for multiple type dropdowns
     */
    renderDropdownLabels() {
        const { multiple, selected } = this.props;
        // Selection labels should appear only for multiple dropdowns
        if (!multiple) {
            return null;
        }

        return React.Children.map(this.props.children, child => {
            // Process only option or option like childs and if it's selected
            if (selected.indexOf(child.props.value) !== -1) {
                return (
                    <Motion defaultStyle={{ opacity: 0.5, scale: 0.5 }}
                            style={{
                                opacity: spring(1, { stiffness: 300, damping: 50 }),
                                scale: spring(1, { stiffness: 700, damping: 50, precision: 0.1 })
                            }}
                    >
                            {interpolatedStyle =>
                                <Select.Components.Label component="a"
                                                         key={`label-${child.props.value}`}
                                                         style={{ ...interpolatedStyle, display: 'inline-block' }}
                                >
                                                         {child.props.children}
                                                             <Select.Components.Icon name="close"
                                                                                     onClick={this.onLabelCloseIconClick.bind(this, child.props.value)}/>
                                </Select.Components.Label>
                            }
                    </Motion>
                );
            }
        });
    }

    /**
     * Render dropdown placeholder text
     */
    renderDropdownText() {
        /* eslint-disable no-use-before-define */
        const { multiple, placeholder, search, selected, searchString, selection } = this.props;
        /* eslint-enable no-use-before-define */

        // Render placeholder if not selected anything or multiple
        if (selected.length === 0 || multiple) {
            if (typeof placeholder !== 'undefined') {
                // Selection type should use default text, non selection text
                return (
                    <div className={selection ? 'default text' : 'text'}>{placeholder}</div>
                )
            } else {
                return null;
            }
        } else {
            // Single selection here
            // Render selected children in text div here if selected anything
            let content = <div className="text filtered"></div>;
            // Do not render when performing search
            if (!search || !searchString) {
                // traverse in childs, find necessary node
                React.Children.forEach(this.props.children, child => {
                    if (typeof child.props.value !== 'undefined' && selected.indexOf(child.props.value) !== -1) {
                        content = <div className="text">{child.props.children}</div>
                    }
                });
            }
            return content;
        }
    }

    /**
     * Renders dropdown icon
     */
    renderDropdownIcon() {
        const { icon } = this.props;
        return (
            <Select.Components.Icon name={icon}/>
        )
    }

    /**
     * Renders search input
     */
    renderSearchInput() {
        const { search, searchGlyphWidth, searchString, searchPosition, multiple } = this.props;

        // Do not render if not searchable
        if (!search) {
            return null;
        }

        const searchWidth = searchGlyphWidth * searchString.length;
        // single selection dropdown shouldn't apply width style
        const style = searchWidth && searchPosition === 'dropdown' && multiple ? { width: `${searchWidth}em` } : {};
        if (searchPosition === 'dropdown') {
            return (
                <input autoComplete="off"
                       className="search"
                       key="searchInput"
                       onChange={this.onSearchInputChange}
                       onKeyDown={this.onSearchInputKeyDown}
                       ref={ref => this.searchRef = ref}
                       style={style}
                       tabIndex={0}
                       value={searchString}/>
            )
        } else {
            // Search in menu has slightly different layout
            return (
                <div className="ui icon search input">
                    <Select.Components.Icon name="search"/>
                    <input key="searchInput"
                           onChange={this.onSearchInputChange}
                           onKeyDown={this.onSearchInputKeyDown}
                           placeholder="Search..."
                           ref={ref => this.searchRef = ref}
                           tabIndex={0}
                           type="text"
                           value={searchString}/>
                </div>
            )
        }
    }

    /**
     * Renders search header if specified
     */
    renderSearchHeader() {
        const { search, searchHeader } = this.props;
        if (search && searchHeader) {
            return (<Select.Components.Header key="searchHeader">{searchHeader}</Select.Components.Header>);
        } else {
            return null;
        }
    }

    /**
     * Filters children options to exclude selected elements or elements which doesn't match to search
     */
    renderFilteredChildren() {
        const { search, searchIgnoreCase, selected, searchString, multiple } = this.props;
        const searchRegex = new RegExp(searchString, searchIgnoreCase ? 'gi' : 'g');

        let newChildren = [];
        React.Children.forEach(this.props.children, child => {
            // only process option like childs
            if (typeof child.props.value !== 'undefined') {
                let match = true;
                if (search && searchString !== '') {
                    // value could be int or string. In case of int convert it to string
                    const value = (typeof child.props.value === 'number') ? Number.parseInt(child.props.value) : child.props.value;
                    match = (searchRegex.test(value) || searchRegex.test(child.props.children));
                }

                // Match for non search selection will be always true
                if (match) {
                    // For multiple type render only non selected options
                    if (multiple && selected.indexOf(child.props.value) === -1) {
                        newChildren.push(React.cloneElement(
                            child,
                            {
                                key: child.key ? child.key : child.props.value,
                                // need to pass menu value, otherwise menu will not bind handler
                                menuValue: child.props.value
                            }
                        ));
                    } else if (!multiple) {
                        // for single selection render all options but add selected value
                        newChildren.push(React.cloneElement(
                            child,
                            {
                                active: (selected.indexOf(child.props.value) !== -1),
                                key: child.key ? child.key : child.props.value,
                                // need to pass menu value, otherwise menu will not bind handler
                                menuValue: child.props.value
                            }
                        ));
                    }
                }
            } else if (searchString === '') {
                // need to pass non option like childs, but only if search string is empty
                newChildren.push(React.cloneElement(
                    child,
                    {
                        key: child.key ? child.key : child.props.value
                    }
                ));
            }
        });
        return newChildren;
    }

    render() {
        /* eslint-disable no-use-before-define */
        const {
            active, children, enterAnimation, leaveAnimation, icon, name, search, searchPosition, searchHeader,
            searchString, searchGlyphWidth, searchIgnoreCase, searchNoResultsMessage, placeholder, selected, selection,
            multiple, onSelectChange, onRequestClose, onSearchStringChange, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

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
        if ((!filteredChilds || filteredChilds.length === 0) && (search && searchString != '')) {
            filteredChilds = [
                <div className="message"
                     key="noResultsMessage"
                     ref={ref => this.noResultsMessageRef = ref}
                >
                     {searchNoResultsMessage}
                </div>
            ]; // eslint-disable-line
        }

        menuChildrens = menuChildrens.concat(filteredChilds);

        other.className = classNames(other.className, this.getClasses());

        /* eslint-disable */
        const menuStyle = active ? this.menuVisibleStyle :
            this.state.animating ? this.menuVisibleStyle : this.menuHiddenStyle;
        /* eslint-enable */

        // We want to animate only visible part of select, this is 6 items or 8 if scrolling option was given
        // Semantic-UI has max-height set in CSS
        const maxAnimatingHeight = (this.state.menuHeight / React.Children.count(this.props.children)) * ((other.scrolling) ? 8 : 6);
        // Animate height to this value
        const animateHeightTo = this.state.menuHeight > maxAnimatingHeight ? maxAnimatingHeight : this.state.menuHeight;

        let animationStyle = {};
        if (active) {
            animationStyle = {
                height: enterAnimation ? spring(animateHeightTo, enterAnimation) : animateHeightTo
            };
        } else {
            animationStyle = {
                height: leaveAnimation ? spring(0, leaveAnimation) : 0
            };
        }
        return (
            <Select.Components.DropdownElement
                {...other}
                active={active}
            >
                {/* This will embed <noscript></noscript> inside dropdown div. Shouldn't cause any problems */}
                    <EventListener target={document}
                                   onMouseDown={this.onOutsideDropdownClick}
                                   onTouchStart={this.onOutsideDropdownClick}/>
                {this.renderDropdownInput()}
                {this.renderDropdownLabels()}
                {this.renderDropdownText()}
                {this.renderDropdownIcon()}
                {search && searchPosition === 'dropdown' &&
                this.renderSearchInput()
                }
                <Motion defaultStyle={{ height: active ? animateHeightTo : 0 }}
                        style={animationStyle}
                        onRest={this.onAnimationRest}
                >
                        {interpolatedStyle =>
                            <Measure whitelist={['height']}
                                     onMeasure={this.onMenuMeasure}
                                     accurate
                            >
                                <Select.Components.Menu key="menu"
                                                        onMenuItemClick={this.onMenuItemClick}
                                                        ref={ref => this.menuRef = ref}
                                                        style={{
                                                            ...menuStyle,
                                                            ...interpolatedStyle,
                                                            // Display scroll if select is too large
                                                            overflowY: (this.state.menuHeight > maxAnimatingHeight) ? 'auto' : 'hidden'
                                                        }}
                                >
                                    {menuChildrens}
                                </Select.Components.Menu>
                            </Measure>

                        }
                </Motion>
            </Select.Components.DropdownElement>
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
