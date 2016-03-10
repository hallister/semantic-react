Select is the dropdown with ability to select one or few values

### Simple select

    'values' in state || setState({values: []});
    'active' in state || setState({active: false});
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

    const Icon = require('../../elements').Icon;
    'values' in state || setState({values: []});
    'active' in state || setState({active: false});
    <Select active={state.active}
            selection
            selected={state.values}
            placeholder="Select me"
            onSelectChange={val => setState({values: val, active: false})}
            onClick={() => setState({active: !state.active})}
            onRequestClose={() => setState({active: false})}
    >
        <Option value={1}><Icon name="twitter"/>First</Option>
        <Option value={2}><Icon name="cloud"/>Second</Option>
    </Select>

### Selection with search

    const Flag = require('../../elements').Flag;
    'values' in state || setState({values: []});
    'active' in state || setState({active: false});
    'search' in state || setState({search: ''});
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

### Multiple selection

    'values' in state || setState({values: []});
    'active' in state || setState({active: false});
    <Select active={state.active}
            multiple
            selection
            placeholder="Skills"
            selected={state.values}
            onSelectChange={(val, count) => {
                                                if(count <= 1) {
                                                    setState({ values: val, active: false});
                                                } else {
                                                    setState({ values: val });
                                                }
                                             }}
            onClick={() => setState({active: true})}
            onRequestClose={() => setState({active: false})}
    >
        <Option value="angular">Angular</Option>
        <Option value="react">React</Option>
        <Option value="semantic">Semantic UI</Option>
        <Option value="animation">Animation</Option>
    </Select>

### Multiple search selection

    'values' in state || setState({values: []});
    'active' in state || setState({active: false});
    'search' in state || setState({search: ''});
    const Flag = require('../../elements').Flag;
    <Select active={state.active}
            multiple
            search
            selected={state.values}
            selection
            placeholder="Select Country"
            onSelectChange={(val, count) => {
                                                if(count <= 1) {
                                                    setState({ values: val, active: false});
                                                } else {
                                                    setState({ values: val });
                                                }
                                             }}
            onClick={() => setState({active: true})}
            onRequestClose={() => setState({active: false})}
            onSearchStringChange={search => setState({search: search})}
            searchString={state.search}
    >
        <Option value="us"><Flag name="us"/>USA</Option>
        <Option value="us-alt"><Flag name="us"/>Alternative USA</Option>
        <Option value="es"><Flag name="es"/>Spain</Option>
        <Option value="ga"><Flag name="ga"/>Gabon</Option>
    </Select>


# TODO: rewrite these examples
## Dropdown could be used with custom component (Mainly with buttons):
simple button

    const Button = require('../../elements').Button;
    <Select floating selection={false} search component={Button} placeholder="Select language">
        <Option value="ab">Fun language</Option>
        <Option value="cd">Very Fun Language</Option>
    </Select>

labeled button

    const LabeledButton = require('../../elements').LabeledButton;
    <Select selection={false} floating search component={LabeledButton} icon="world" placeholder="Select language">
        <Option value="ab">Fun language</Option>
        <Option value="cd">Very Fun Language</Option>
    </Select>


## Search input could be in menu itself

    const LabeledButton = require('../../elements').LabeledButton;
    const Label = require('../../elements').Label;
    const Divider = require('../../elements').Divider;
    <Select selection={false} floating search searchPosition="menu" component={LabeledButton} icon="filter" placeholder="Filer">
        <Divider/>
        <Option value="first"><Label circular color="red"/>HEY</Option>
        <Option value="second"><Label circular color="blue"/>Choose me please</Option>
    </Select>

With header

    const LabeledButton = require('../../elements').LabeledButton;
    const Label = require('../../elements').Label;
    const Divider = require('../../elements').Divider;
    <div style={{ height: 75 }}>
    <Select selection={false} floating search searchPosition="menu" component={LabeledButton} icon="filter" placeholder="Filer" searchHeader="Search stuff:">
        <Divider/>
        <Option value="first"><Label circular color="red"/>HEY</Option>
        <Option value="second"><Label circular color="blue"/>Choose me please</Option>
    </Select>
    </div>

