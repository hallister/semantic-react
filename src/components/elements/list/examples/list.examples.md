# List
A list groups related content

### Examples:

```example
<List>
    <ListItem>Apples</ListItem>
    <ListItem>Pears</ListItem>
    <ListItem>Oranges</ListItem>
</List>
```

```example
<List>
    <ListItem image="users">
        Semantic UI
    </ListItem>
    <ListItem image="marker">
        New York, NY
    </ListItem>
    <ListItem iamge="mail">
            <a href="mailto:test@test.com">test@test.com</a>
    </ListItem>
</List>
```

```example
const ListIconComponent = (props) => <Icon aligned="middle" size="large" {...props}/>;
<List relaxed celled="divided">
    <ListItem image="github" imageComponent={ListIconComponent}>
        <Header component="a">Semantic-Org/Semantic-UI</Header>
        <Description>Updated 10 mis ago</Description>
    </ListItem>
    <ListItem image="github" imageComponent={ListIconComponent}>
        <Header component="a">Semantic-Org/Semantic-UI-Docs</Header>
        <Description>Updated 22 mins ago</Description>
    </ListItem>
 </List>
```

```example
<List>
    <ListItem image="folder">
            <Header>src</Header>
            <Description>Source files for project</Description>
            <List>
                <ListItem image="folder">
                        <Header>site</Header>
                        <Description>Your site's name</Description>
                </ListItem>
                <ListItem image="folder">
                        <Header>Themes</Header>
                        <Description>Theme sfolder</Description>
                </ListItem>
            </List>
    </ListItem>
    <ListItem image="folder">
            <Header>Folder</Header>
            <Description>Another folder</Description>
    </ListItem>
</List>
```

## Types

### Bulleted

```example
<List type="bulleted">
    <ListItem>Gaining access</ListItem>
    <ListItem>Inviting Friends</ListItem>
    <ListItem>
        <div>Benefits</div>
        <List>
            <ListItem>Test 1</ListItem>
            <ListItem>Test 2</ListItem>
        </List>
    </ListItem>
</List>
```

### Ordered

```example
<List type="ordered">
    <ListItem>Gaining access</ListItem>
    <ListItem>Inviting Friends</ListItem>
    <ListItem>
        <div>Benefits</div>
        <List>
            <ListItem>Test 1</ListItem>
            <ListItem>Test 2</ListItem>
        </List>
    </ListItem>
</List>
```

### Link list

```example
<List link>
    <ListItem active>ListItem 1</ListItem>
    <ListItem>ListItem 2</ListItem>
    <ListItem>ListItem 3</ListItem>
</List>
```

## Content

### Simple item

```example
<List>
    <ListItem>1</ListItem>
    <ListItem>2</ListItem>
    <ListItem>3</ListItem>
</List>
```

### Item with icon
by default image prop is assumed as icon name

```example
<List>
    <ListItem image="help">
            test
    </ListItem>
    <ListItem image="right triangle">
            <Header>Text</Header>
            <Description>Description</Description>
    </ListItem>
    <ListItem image="help">
        Inline text
    </ListItem>
</List>
```

### Item with image
*Note: by default image is assumed as avatar image since it's most common case, you can provide custom image component to override*

```example
<List>
    <ListItem image="http://semantic-ui.com/images/avatar2/small/rachel.png" imageType="image">
            <Header>Rachel</Header>
            <Description>Test</Description>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar2/small/rachel.png" imageType="image">
            <Header>Text</Header>
            <Description>Description</Description>
    </ListItem>
</List>
```

### Custom Image/Icon component

```example
const MyCustomIcon = ({ name }) => <Icon size="big" color="red" name={name}/>;
const MyCustomImage = ({ src }) => <Image src={src}/>;

<List>
    <ListItem image="help" imageType="icon" imageComponent={MyCustomIcon}>
            test
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar2/small/rachel.png" imageType="image" imageComponent={MyCustomImage}>
            <Header>Rachel</Header>
            <Description>Test</Description>
    </ListItem>
</List>
```

### Right floated component
```example
MyCustomRightFloatedComponent = () => <Button>Add</Button>;
<List aligned="middle" celled="divided">
    <ListItem image="http://semantic-ui.com/images/avatar2/small/lena.png" imageType="image" rightFloatedComponent={MyCustomRightFloatedComponent}>
        Lena
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar2/small/lena.png" imageType="image" rightFloatedComponent={MyCustomRightFloatedComponent}>
        Lena
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar2/small/lena.png" imageType="image" rightFloatedComponent={MyCustomRightFloatedComponent}>
        Lena
    </ListItem>
 </List>
```

### Item with header

```example
<List>
    <ListItem>
        <Header>Test header</Header>
        test text
    </ListItem>
    <ListItem>
        <Header>Another header</Header>
        another text
    </ListItem>
</List>
```


## Variations

### Horizontal list

```example
<List horizontal>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
</List>
```

### Inverted list

```example
<Segment color="black" inverted>
    <List inverted>
        <ListItem>Test 1</ListItem>
        <ListItem>Test 1</ListItem>
        <ListItem>Test 1</ListItem>
        <ListItem>Test 1</ListItem>
    </List>
</Segment>
```

### Selection list

```example
<List selection aligned="middle">
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
</List>
```

### Animated list

```example
<List selection aligned="middle" animated>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
</List>
```

### Relaxed

```example
<List relaxed>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/tom.jpg" imageType="image">
            <Header>Tom</Header>
            Top person
    </ListItem>
 </List>
```

```example
<List horizontal relaxed>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
```

### Divided

```example
<List aligned="middle" celled="divided">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
```

### Celled

```example
<List aligned="middle" celled>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
```

### Size

```example
<div>
<List horizontal aligned="middle" size="mini">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
 <br/>
<List horizontal aligned="middle" size="tiny">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
 <br/>
<List horizontal aligned="middle" size="small">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
 <br/>
<List horizontal aligned="middle" size="large">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
 <br/>
<List horizontal aligned="middle" size="big">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
 <br/>
<List horizontal aligned="middle" size="huge">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
 <br/>
<List horizontal aligned="middle" size="massive">
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
    <ListItem image="http://semantic-ui.com/images/avatar/small/daniel.jpg" imageType="image">
        <Header>header</Header>
    </ListItem>
 </List>
</div>
```
