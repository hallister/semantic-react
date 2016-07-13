# Rail
Rails display optional accompanying content outside of the main viewport of your website. Sites often use rails with sticky content to fix additional—often optional—content to your viewport as you scroll through the page.

```example
<Segment style={{ width: 100, height: 400 }}>
    <Rail floated="right">
        <Segment>Right rail content</Segment>
    </Rail>
    <p></p>
    <p></p>
</Segment>
```

## Variations

### Internal

```example
<Segment style={{ height: 400, width: 600 }}>
    <Rail internal floated="right">
        <Segment>Right rail content</Segment>
    </Rail>
</Segment>
```

### Dividing

```example
<Segment style={{ height: 400, width: 100 }}>
    <Rail dividing floated="right">
        <Segment>Right rail content</Segment>
    </Rail>
</Segment>
```

### Attached

```example
<Segment style={{ height: 400, width: 100 }}>
    <Rail attached floated="right">
        <Segment>Right rail content</Segment>
    </Rail>
</Segment>
```

```example
<Segment style={{ height: 400, width: 600 }}>
    <Rail internal attached floated="right">
        <Segment>Right rail content</Segment>
    </Rail>
</Segment>
```

### Close

```example
<Segment style={{ height: 400, width: 100 }}>
    <Rail close floated="right">
        <Segment>Right rail content</Segment>
    </Rail>
</Segment>
```

```example
<Segment style={{ height: 400, width: 100 }}>
    <Rail close="very" attached floated="right">
        <Segment>Right rail content</Segment>
    </Rail>
</Segment>
```

### Sizes

```example
<Segment style={{ height: 400, width: 100 }}>
    <Rail floated="right" size="large">
        <Segment>Right rail content</Segment>
    </Rail>
</Segment>
```
