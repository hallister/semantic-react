## Input

### Without value will be uncontrolled input

    <Input placeholder="Search..."/>


### With value provided will be controlled input


```require
./basic.controlled.jsx
```


## States

### Focused:

    <Input state="focus"/>

### Disabled:

    <Input state="disabled"/>

### Error:

    <Input state="error" />

### Loading:

    <Input state="loading" />

Loading state will always add automatically icon, even if you provided different

```require
./basic.loading.jsx
```


## Variations:

### Icon input
By default icon is being placed on the right side:

    <Input icon="users"/>

You can control position by iconPosition prop:

    <Input icon="users" iconPosition="left" />

You can pass own custom icon component

    <Input icon="users"
           iconPosition="left"
           iconComponent={({ name }) => <Icon link circular name={name}/>}/>


### Labeled input
By default is being placed on the left side:

    <Input label="http://"/>

You can control position too:

    <Input label="kg" labelPosition="right" />


Or pass custom label component:

    <Input label="kg"
           labelPosition="right"
           labelComponent={({ children }) => <Label basic color="red">{children}</Label>} />

Or you can have labeled icon button:

    <div>
        <Input icon="users" label="Users"/>
        <Input icon="users"
               iconPosition="left"
               label="Users"
               labelPosition="right" />
    </div>

Or more handy using custom label component:

    <Input icon="tags"
           iconPosition="left"
           label="Add tag"
           labelPosition="right"
           labelComponent={({ children }) => <Label tag>{children}</Label>}
    />

Left/right corner labels requires custom label class:

    <Input label="asterisk"
           labelPosition="left corner"
           labelComponent={({ children }) => <Label corner="left"><Icon name={children}/></Label>}
    />

right

    <Input label="asterisk"
           labelPosition="right corner"
           labelComponent={({ children }) => <Label color="red" corner="right"><Icon name={children}/></Label>}
    />

### Action
Input can be linked with some action component, usually with button:

```require
./action.button.jsx
```

### Want button with dropdown? This is not a problem!

*Note: Usually you'll want to encapsulate this logic into your own component*

```require
./action.dropdown.jsx
```

### Transparent
Simple

    <Input transparent placeholder="Search..." />

Transparent with icon

    <Input icon="search" transparent placeholder="Search..." />

### Inverted

    <Segment inverted>
        <Input inverted placeholder="Search..."/>
        <Divider inverted />
        <Input inverted icon="search" iconPosition="left" placeholder="Search..." />
        <Divider inverted />
        <Input inverted icon="search" transparent placeholder="Search..." />
    </Segment>

### Fluid

    <Segment>
        <Input icon="search" fluid/>
    </Segment>

### Size

    <div>
        <Input icon="search" size="mini" />
        <Input icon="search" size="small" />
        <Input icon="search" size="large" />
        <Input icon="search" size="big" />
        <Input icon="search" size="huge" />
        <Input icon="search" size="massive" />
    </div>
