# Loader
Loaders are hidden unless active or inside active dimmer

```example
<Segment>
    <p/>
    <Dimmer active>
        <Loader/>
    </Dimmer>
</Segment>
```

# Text Loader

```example
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text>Loading</Loader>
    </Dimmer>
</Segment>
```

```example
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active inverted>
        <Loader text>Loading</Loader>
    </Dimmer>
</Segment>
```


## States

### Indeterminate

```example
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text state="indeterminate">Preparing</Loader>
    </Dimmer>
</Segment>
```

### Active
Without dimmer need to give state="active"

```example
<Segment style={{ height: 100 }}>
    <Loader state="active" text>Loading</Loader>
    <p/>
</Segment>
```

### Disabled

```example
<Segment style={{ height: 100 }}>
    <Loader state="disabled"/>
    <p/>
</Segment>
```


## Variations

### Inline

```example
<Header>
    Some text
    <Loader inline state="active"/>
    Some text
</Header>
```

### Inline centered
```example
<Header>
    Some text
    <Loader centered state="active"/>
    Some text
</Header>
```

### Sizes

```example
<Segments>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="mini">Loading</Loader>
    </Dimmer>
</Segment>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="tiny">Loading</Loader>
    </Dimmer>
</Segment>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="small">Loading</Loader>
    </Dimmer>
</Segment>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="medium">Loading</Loader>
    </Dimmer>
</Segment>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="large">Loading</Loader>
    </Dimmer>
</Segment>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="big">Loading</Loader>
    </Dimmer>
</Segment>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="huge">Loading</Loader>
    </Dimmer>
</Segment>
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active>
        <Loader text size="massive">Loading</Loader>
    </Dimmer>
</Segment>
</Segments>
```

### Inverted

```example
<Segment inverted style={{ height: 100 }}>
    <Loader state="active" inverted/>
</Segment>
```

Loaders will automatically be inverted inside inverted dimmer

```example
<Segment style={{ height: 100 }}>
    <p/>
    <Dimmer active inverted>
        <Loader text>Loading</Loader>
    </Dimmer>
</Segment> 
```
