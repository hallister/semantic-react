Select is the dropdown with ability to select one or few values

### Simple select

     <Select selection placeholder="Select me">
         <Option value={1}>First</Option>
         <Option value={2}>Second</Option>
     </Select>

### Option could contain other markup

    const Icon = require('../../elements').Icon;
    <Select selection placeholder="Select me">
        <Option value={1}><Icon name="twitter"/>First</Option>
        <Option value={2}><Icon name="cloud"/>Second</Option>
    </Select>

### Selection with search

    const Flag = require('../../elements').Flag;
    <Select search selection placeholder="Countries">
        <Option value="us"><Flag name="us"/>USA</Option>
        <Option value="es"><Flag name="es"/>Spain</Option>
        <Option value="ga"><Flag name="ga"/>Gabon</Option>
    </Select>

### Multiple selection

    <Select multiple selection placeholder="Skills">
        <Option value="angular">Angular</Option>
        <Option value="react">React</Option>
        <Option value="semantic">Semantic UI</Option>
        <Option value="animation">Animation</Option>
    </Select>

### Multiple search selection

    const Flag = require('../../elements').Flag;
    <Select multiple search selection placeholder="Select Country">
        <Option value="us"><Flag name="us"/>USA</Option>
        <Option value="us-alt"><Flag name="us"/>Alternative USA</Option>
        <Option value="es"><Flag name="es"/>Spain</Option>
        <Option value="ga"><Flag name="ga"/>Gabon</Option>
    </Select>


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

