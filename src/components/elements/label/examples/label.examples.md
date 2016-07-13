## Label
```example
<Label><Icon name="mail"/>23</Label>
```


## Image label
```example
<div>
    <Label image="http://semantic-ui.com/images/avatar/small/elliot.jpg">Elliot</Label>
    <Label image="http://semantic-ui.com/images/avatar/small/joe.jpg">Joe</Label>
    <Label image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Stevie</Label>
</div>
```


## Image label with detail
```example
<div>
    <Label color="blue" image="http://semantic-ui.com/images/avatar/small/veronika.jpg">
        Veronika
        <Detail>Friend</Detail>
    </Label>
    <Label color="teal" image="http://semantic-ui.com/images/avatar/small/jenny.jpg">
        Jenny
        <Detail>Student</Detail>
    </Label>
    <Label color="yellow" image="http://semantic-ui.com/images/avatar/small/christian.jpg">
        Jenny
        <Detail>Co-worker</Detail>
    </Label>
</div>
```

## And with icon
```example
<div>
    <Label color="blue" image="http://semantic-ui.com/images/avatar/small/veronika.jpg">
        Veronika
        <Icon name="delete"/>
    </Label>
    <Label color="teal" image="http://semantic-ui.com/images/avatar/small/jenny.jpg">
        Jenny
        <Icon name="delete"/>
    </Label>
</div>
```

## Pointing
```example
<Segments>
<Segment>
    <Form equalWidth>
        <Field>
            <Input placeholder="First name"/>
            <Label pointing>Please enter the value</Label>
        </Field>
        <Divider/>
        <Field>
            <Label pointing="bottom">Please enter the value</Label>
            <Input placeholder="Last name"/>
        </Field>
        <Divider/>
        <Field inline>
            <Input placeholder="Username"/>
            <Label pointing="left">Name is taken</Label>
        </Field>
        <Divider/>
        <Field inline>
            <Label pointing="right">Lalalalla</Label>
            <Input placeholder="Password"/>
        </Field>
    </Form>
</Segment>
<Segment>
    <Form equalWidth>
        <Field>
            <Input placeholder="First name"/>
            <Label color="red" basic pointing>Please enter the value</Label>
        </Field>
        <Divider/>
        <Field>
            <Label color="blue" basic pointing="bottom">Please enter the value</Label>
            <Input placeholder="Last name"/>
        </Field>
        <Divider/>
        <Field inline>
            <Input placeholder="Username"/>
            <Label color="pink" basic pointing="left">Name is taken</Label>
        </Field>
        <Divider/>
        <Field inline>
            <Label color="red" pointing="right">Lalalalla</Label>
            <Input placeholder="Password"/>
        </Field>
    </Form>
</Segment>
</Segments>
```

## Corner
*Note: Image will be automatically wrapped into div*
```example
<Grid columns={2}>
    <Column>
        <Image fluid src="http://semantic-ui.com/images/wireframe/image.png">
            <Label corner="left"><Icon name="heart"/></Label>
        </Image>
    </Column>
    <Column>
        <Image fluid src="http://semantic-ui.com/images/wireframe/image.png">
            <Label color="red" corner="right"><Icon name="save"/></Label>
        </Image>
    </Column>
</Grid>
```

## Tag
```example
<div>
    <Label tag>New</Label>
    <Label tag color="red">Upcoming</Label>
    <Label tag color="teal">Featured</Label>
</div>
```

## Ribbon
```example
<Grid columns={2}>
    <Column>
        <Segment type="raised">
            <Label ribbon color="red">Overview</Label>
            <span>Account details</span>
            <p></p>
            <Label ribbon color="blue">Community</Label>
            User reviews
            <p></p>
        </Segment>
    </Column>
    <Column>
        <Segment>
            <Label ribbon="right" color="orange"><Icon name="spoon"/>Specs</Label>
            <p></p>
            <Label ribbon="right" color="teal"><Icon name="food"/>Reviews</Label>
            <p></p>
        </Segment>
    </Column>
</Grid>
```

## Horizontal
```example
<div>
    <Label horizontal color="red">Fruit</Label>Kumquats
</div>
```


## Floating
```example
<Menu>
    <MenuItem menuValue="1">
        <Icon name="mail"/>Messages
        <Label color="red" floating>22</Label>
    </MenuItem>
    <MenuItem menuValue="2">
        <Icon name="users"/>Friends
        <Label color="teal" floating>9999</Label>
    </MenuItem>
</Menu>
```

## Detail content
```example
<Label>
    Docs
    <Detail>214</Detail>
</Label>
```

## Icon content
```example
<div>
<Label>
    <Icon name="mail"/>Mail
</Label>
<Label>
    Tag
    <Icon name="delete"/>
</Label>
</div>
```

## Image content
This is not image label!
```example
<div>
    <Label>
        <Image avatar spaced="right" src="http://semantic-ui.com/images/avatar/small/elliot.jpg"/>
        Elliot
    </Label>
    <Label>
        <img src="http://semantic-ui.com/images/avatar/small/stevie.jpg"/>
        Stevie
    </Label>
</div>
```

## Link
```example
<div>
<Label link>
    <Icon name="mail"/>24
</Label>

<Label onClick={() => {}}>
    <Icon name="mail"/>24
</Label>
</div>
```

## Circular
```example
<div>
    <Label circular color="red">2</Label>
    <Label circular color="orange">2</Label>
    <Label circular color="yellow">2</Label>
    <Label circular color="olive">2</Label>
    <Label circular color="green">2</Label>
    <Label circular color="teal">2</Label>
    <Label circular color="blue">2</Label>
    <Label circular color="violet">2</Label>
    <Label circular color="purple">2</Label>
    <Label circular color="pink">2</Label>
    <Label circular color="brown">2</Label>
    <Label circular color="grey">2</Label>
    <Label circular color="black">2</Label>
</div>
```

## Empty
```example
<div>
    <Label empty circular color="red"></Label>
    <Label empty circular color="orange"></Label>
    <Label empty circular color="yellow"></Label>
    <Label empty circular color="olive"></Label>
    <Label empty circular color="green"></Label>
    <Label empty circular color="teal"></Label>
    <Label empty circular color="blue"></Label>
    <Label empty circular color="violet"></Label>
    <Label empty circular color="purple"></Label>
    <Label empty circular color="pink"></Label>
    <Label empty circular color="brown"></Label>
    <Label empty circular color="grey"></Label>
    <Label empty circular color="black"></Label>
</div>
```

## Basic
```example
<div>
    <Label basic>Basic</Label>
    <Label basic pointing>Pointing</Label>
    <Label basic image="http://semantic-ui.com/images/avatar/small/elliot.jpg">Elliot</Label>
    <Label basic pointing color="red">Color pointing</Label>
    <Label basic color="blue">Blue</Label>
</div>
```

## Colored
```example
<div>
    <Label color="red">Red</Label>
    <Label color="orange">Orange</Label>
    <Label color="yellow">Yellow</Label>
    <Label color="olive">Olive</Label>
    <Label color="green">Green</Label>
    <Label color="teal">Teal</Label>
    <Label color="purple">Purple</Label>
    <Label color="pink">Pink</Label>
    <Label color="brown">Brown</Label>
    <Label color="grey">Grey</Label>
    <Label color="black">Black</Label>
 </div>
 ```

## Size
```example
<div>
    <Label size="mini">Mini</Label>
    <Label size="tiny">Tiny</Label>
    <Label size="small">Small</Label>
    <Label size="medium">Medium</Label>
    <Label size="large">Large</Label>
    <Label size="big">Big</Label>
    <Label size="huge">Huge</Label>
    <Label size="massive">Massive</Label>
</div>
```
