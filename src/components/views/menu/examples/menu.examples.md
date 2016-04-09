# Menu:

## Simple menu

    <Menu>
        <MenuItem>First item</MenuItem>
        <MenuItem>Second Item</MenuItem>
    </Menu>

## Menu with active item

    <Menu menuValue={1}>
        <MenuItem menuValue={0}>Item 1</MenuItem>
        <MenuItem menuValue={1}>Item 2</MenuItem>
    </Menu>

## Menu can have few active items

    <Menu menuValue={['test1','test3']}>
        <MenuItem menuValue="test1">Item 1</MenuItem>
        <MenuItem menuValue="test2">Item 2</MenuItem>
        <MenuItem menuValue="test3">Item 3</MenuItem>
    </Menu>

# Controlled menu

    class TestMenu extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activeItems: ['test1']
            }
        }
        render() {
            return (
                <div>
                    <h1>Selected: {this.state.activeItems.join(',')}</h1>
                    <Menu menuValue={this.state.activeItems}
                          onMenuChange={newItems => this.setState({activeItems: newItems})}
                    >
                        <MenuItem menuValue="test1">Item 1</MenuItem>
                        <MenuItem menuValue="test2">Item 2</MenuItem>
                        <MenuItem menuValue="test3">Item 3</MenuItem>
                    </Menu>
                </div>
             );
        }
    }
    <TestMenu />

## You can wrap menuitem with custom component as well

    class MyMenuItem extends React.Component {
        render() {
        const {active, children, ...other} = this.props;
        return (/* Do not forget to pass other properties */
                <MenuItem {...other}>
                    {active && <Icon name="checkmark"/>}
                    {children}
                </MenuItem>);
        }
    }

    <Menu menuValue={['test1','test3']}>
        <MyMenuItem menuValue="test1">Item 1</MyMenuItem>
        <MyMenuItem menuValue="test2">Item 2</MyMenuItem>
        <MyMenuItem menuValue="test3">Item 3</MyMenuItem>
    </Menu>


