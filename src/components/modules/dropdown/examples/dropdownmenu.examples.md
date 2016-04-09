## Dropdown Menu behaves like menu but with dropdown!

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                active: false,
                menuValue: null
            }
        }
        onMenuChange(value) {
            this.setState({
                menuValue: value
            });
        }
        onDropdownClick() {
            this.setState({
                active: !this.state.active
            });
        }
        closeDropdown() {
            this.setState({
                active: false
            });
        }
        render() {
            return (
                <div>
                    <DropdownMenu active={this.state.active}
                                 label="Simple Dropdown Menu"
                                 menuValue={this.state.menuValue}
                                 onClick={this.onDropdownClick.bind(this)}
                                 onMenuItemClick={this.closeDropdown.bind(this)}
                                 onMenuChange={this.onMenuChange.bind(this)}
                                 onRequestClose={this.closeDropdown.bind(this)}
                   >
                        <MenuItem menuValue={1}>First item</MenuItem>
                        <MenuItem menuValue={2}>Second item</MenuItem>
                        <MenuItem menuValue={3}>Third item</MenuItem>
                   </DropdownMenu>
                   <h3>You selected: {this.state.menuValue}</h3>
                </div>
            );
        }
    }

    <MyComponent />

## You can override menu or dropdown with custom menu or component

    const MyDropdownButton = (props) => {
        return <IconButton name="cloud" {...props} />
    }

    const MyMenu = (props) => {
        return <Menu {...props}/>
    }

    class MyOtherComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                active: false
            }
        }
        toggleDropdown() {
            this.setState({active: !this.state.active});
        }
        render() {
            return (
                <DropdownMenu active={this.state.active}
                              component={MyDropdownButton}
                              menuComponent={MyMenu}
                              onClick={this.toggleDropdown.bind(this)}
                >
                        <MenuItem active menuValue={1}>First</MenuItem>
                        <MenuItem menuValue={2}>Second</MenuItem>
                        <MenuItem menuValue={3}>Third</MenuItem>
                </DropdownMenu>
            );
        }
    }

    <MyOtherComponent />

