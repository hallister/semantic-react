Select is the dropdown with ability to select one or few values

### Simple select

    initialState = { active: false, values: [] };
     <Select active={state.active}
             selection
             selected={state.values}
             placeholder="Select me"
             onSelectChange={val => setState({values: val, active: false})}
             onClick={() => setState({active: !state.active})}
             onRequestClose={() => setState({active: false})}
     >
         <Option value={1}>First</Option>
         <Option value={2}>Second</Option>
     </Select>

### Option could contain other markup

    initialState = { active: false, values: [] };
    <Select active={state.active}
            selection
            selected={state.values}
            placeholder="Select me"
            onSelectChange={val => setState({values: val, active: false})}
            onClick={() => setState({active: !state.active})}
            onRequestClose={() => setState({active: false})}
    >
        <Option value={0}><Icon name="facebook"/>First</Option>
        <Option value={1}><Icon name="twitter"/>First</Option>
        <Option value={2}><Icon name="cloud"/>Second</Option>
    </Select>

### Selection with search

    initialState = { active: false, values: [], search: '' };
    <Select active={state.active}
            search
            selection
            placeholder="Countries"
            selected={state.values}
            onSelectChange={val => setState({values: val, active: false})}
            onClick={() => setState({active: true})}
            onRequestClose={() => setState({active: false})}
            onSearchStringChange={search => setState({search: search})}
            searchString={state.search}
    >
        <Option value="us"><Flag name="us"/>USA</Option>
        <Option value="es"><Flag name="es"/>Spain</Option>
        <Option value="ga"><Flag name="ga"/>Gabon</Option>
    </Select>
    
### Selection with allowed additions

    initialState = { active: false, values: [], search: '', options: ['one', 'two', 'three'] };
    <Select active={state.active}
            search
            selection
            allowAdditions
            placeholder="Select me"
            selected={state.values}
            onSelectChange={val => {
                setState({
                    values: val,
                    options: [...new Set(state.options.concat(val))],
                    active: false
                })
            }}
            onClick={() => setState({active: true})}
            onRequestClose={() => setState({active: false})}
            onSearchStringChange={search => setState({search: search})}
            searchString={state.search}
    >
        {state.options.map(o => <Option value={o}>{o}</Option>)}
        
    </Select>

### Multiple selection

    class MySelection extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                values: [],
                active: false
            }
        }
        onSelectChange(val, count) {
            if(count <= 1) {
                this.setState({ values: val, active: false});
            } else {
                this.setState({ values: val });
            }
        }
        render() {
            return (
                <Select active={this.state.active}
                        multiple
                        selection
                        placeholder="Skills"
                        selected={this.state.values}
                        onSelectChange={this.onSelectChange.bind(this)}
                        onClick={() => this.setState({active: true})}
                        onRequestClose={() => this.setState({active: false})}
                >
                    <Option value="angular">Angular</Option>
                    <Option value="react">React</Option>
                    <Option value="semantic">Semantic UI</Option>
                    <Option value="animation">Animation</Option>
                </Select>
            );
        }
    }
    <MySelection />


### Multiple search selection

    class MySelection extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                values: [],
                active: false,
                search: ''
            }
        }
        onSelectChange(val, count) {
            if(count <= 1) {
                this.setState({ values: val, active: false});
            } else {
                this.setState({ values: val });
            }
        }
        render() {
            return (
                <Select active={this.state.active}
                        search
                        multiple
                        selection
                        placeholder="Skills"
                        selected={this.state.values}
                        onSelectChange={this.onSelectChange.bind(this)}
                        onClick={() => this.setState({active: true})}
                        onRequestClose={() => this.setState({active: false})}
                        onSearchStringChange={search => this.setState({search: search})}
                        searchString={this.state.search}
                >
                    <Option value="us"><Flag name="us"/>USA</Option>
                    <Option value="us-alt"><Flag name="us"/>Alternative USA</Option>
                    <Option value="es"><Flag name="es"/>Spain</Option>
                    <Option value="ga"><Flag name="ga"/>Gabon</Option>
                    <Option value="us2"><Flag name="us"/>USA</Option>
                    <Option value="us-alt2"><Flag name="us"/>Alternative USA</Option>
                    <Option value="es2"><Flag name="es"/>Spain</Option>
                    <Option value="ga2"><Flag name="ga"/>Gabon</Option>
                    <Option value="us3"><Flag name="us"/>USA</Option>
                    <Option value="us-alt3"><Flag name="us"/>Alternative USA</Option>
                    <Option value="es3"><Flag name="es"/>Spain</Option>
                    <Option value="ga3"><Flag name="ga"/>Gabon</Option>
                    <Option value="us4"><Flag name="us"/>USA</Option>
                    <Option value="us-alt4"><Flag name="us"/>Alternative USA</Option>
                    <Option value="es4"><Flag name="es"/>Spain</Option>
                    <Option value="ga5"><Flag name="ga"/>Gabon</Option>
                </Select>
            );
        }
    }
    <Segment>
    <MySelection />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </Segment>
    
### Multiple selection with allowed additions

    initialState = { active: false, values: [], search: '', options: ['one', 'two', 'three'] };
        <Select active={state.active}
                search
                selection
                allowAdditions
                multiple
                placeholder="Select me"
                selected={state.values}
                onSelectChange={val => {
                    setState({
                        values: val,
                        options: [...new Set(state.options.concat(val))],
                        active: false
                    })
                }}
                onClick={() => setState({active: true})}
                onRequestClose={() => setState({active: false})}
                onSearchStringChange={search => setState({search: search, active: true})}
                searchString={state.search}
        >
            {state.options.map(o => <Option value={o}>{o}</Option>)}
            
        </Select>



# TODO: rewrite these examples
## Dropdown could be used with custom component (Mainly with buttons):
simple button

    <Select floating selection={false} search component={Button} placeholder="Select language">
        <Option value="ab">Fun language</Option>
        <Option value="cd">Very Fun Language</Option>
    </Select>

labeled button

    <Select selection={false} floating search component={LabeledButton} icon="world" placeholder="Select language">
        <Option value="ab">Fun language</Option>
        <Option value="cd">Very Fun Language</Option>
    </Select>


## Search input could be in menu itself

    <Select selection={false} floating search searchPosition="menu" component={LabeledButton} icon="filter" placeholder="Filer">
        <Divider/>
        <Option value="first"><Label circular color="red"/>HEY</Option>
        <Option value="second"><Label circular color="blue"/>Choose me please</Option>
    </Select>

With header

    <div style={{ height: 75 }}>
    <Select selection={false} floating search searchPosition="menu" component={LabeledButton} icon="filter" placeholder="Filer" searchHeader="Search stuff:">
        <Divider/>
        <Option value="first"><Label circular color="red"/>HEY</Option>
        <Option value="second"><Label circular color="blue"/>Choose me please</Option>
    </Select>
    </div>

