# List
A list groups related content

### Examples:

```example
<List>
    <Item>Apples</Item>
    <Item>Pears</Item>
    <Item>Oranges</Item>
</List>
```

```example
<List>
    <Item>
        <Icon name="users"/>
        <Content>Semantic UI</Content>
    </Item>
    <Item>
        <Icon name="marker"/>
        <Content>New York, NY</Content>
    </Item>
    <Item>
        <Icon name="mail"/>
        <Content>
            <a href="mailto:test@test.com">test@test.com</a>
        </Content>
    </Item>
</List>
```

```example
<List relaxed celled="divided">
    <Item>
        <Icon name="github" size="large" aligned="middle"/>
        <Content>
            <Header component="a">Semantic-Org/Semantic-UI</Header>
            <Description>Updated 10 mis ago</Description>
        </Content>
    </Item>
    <Item>
        <Icon name="github" size="large" aligned="middle"/>
        <Content>
            <Header component="a">Semantic-Org/Semantic-UI-Docs</Header>
            <Description>Updated 22 mins ago</Description>
        </Content>
    </Item>
 </List>
```

```example
<List>
    <Item>
        <Icon name="folder"/>
        <Content>
            <Header>src</Header>
            <Description>Source files for project</Description>
            <List>
                <Item>
                    <Icon name="folder"/>
                    <Content>
                        <Header>site</Header>
                        <Description>Your site's name</Description>
                    </Content>
                </Item>
                <Item>
                    <Icon name="folder"/>
                    <Content>
                        <Header>Themes</Header>
                        <Description>Theme sfolder</Description>
                    </Content>
                </Item>
            </List>
        </Content>
    </Item>
    <Item>
        <Icon name="folder"/>
        <Content>
            <Header>Folder</Header>
            <Description>Another folder</Description>
         </Content>
    </Item>
</List>
```

## Types

### Bulleted

```example
<List type="bulleted">
    <Item>Gaining access</Item>
    <Item>Inviting Friends</Item>
    <Item>
        <div>Benefits</div>
        <List>
            <Item>Test 1</Item>
            <Item>Test 2</Item>
        </List>
    </Item>
</List>
```

### Ordered

```example
<List type="ordered">
    <Item>Gaining access</Item>
    <Item>Inviting Friends</Item>
    <Item>
        <div>Benefits</div>
        <List>
            <Item>Test 1</Item>
            <Item>Test 2</Item>
        </List>
    </Item>
</List>
```

### Link list

```example
<List link>
    <Item link active>Item 1</Item>
    <Item link>Item 2</Item>
    <Item link>Item 3</Item>
</List>
```

## Content

### Simple item

```example
<List>
    <Item>1</Item>
    <Item>2</Item>
    <Item>3</Item>
</List>
```

### Item with icon

```example
<List>
    <Item>
        <Icon name="help"/>
        <Content>
            test
        </Content>
    </Item>
    <Item>
        <Icon name="right triangle"/>
        <Content>
            <Header>Text</Header>
            <Description>Description</Description>
        </Content>
    </Item>
    <Item>
        <Icon name="help"/>
        Inline text
    </Item>
</List>
```

### Item with image

```example
<List>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar2/small/rachel.png"/>
        <Content>
            <Header>Rachel</Header>
            <Description>Test</Description>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar2/small/rachel.png"/>
        <Content>
            <Header>Text</Header>
            <Description>Description</Description>
        </Content>
    </Item>
</List>
```

### Item with header

```example
<List>
    <Item>
        <Header>Test header</Header>
        test text
    </Item>
    <Item>
        <Header>Another header</Header>
        another text
    </Item>
</List>
```


## Variations

### Horizontal list

```example
<List horizontal>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
</List>
```

### Inverted list

```example
<Segment color="black" inverted>
    <List inverted>
        <Item>Test 1</Item>
        <Item>Test 1</Item>
        <Item>Test 1</Item>
        <Item>Test 1</Item>
    </List>
</Segment>
```

### Selection list

```example
<List selection aligned="middle">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
</List>
```

### Animated list

```example
<List selection aligned="middle" animated>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/tom.jpg"/>
        <Content>
            <Header>Tom</Header>
            Top person
        </Content>
    </Item>
</List>
```

### Relaxed

```example
<List relaxed>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
            <Description>Some description</Description>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
            <Description>Some description</Description>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
            <Description>Some description</Description>
        </Content>
    </Item>
 </List>
```

```example
<List horizontal relaxed>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
```

### Divided

```example
<List aligned="middle" celled="divided">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
```

### Celled

```example
<List aligned="middle" celled>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
```

### Size

```example
<div>
<List horizontal aligned="middle" size="mini">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
 <br/>
<List horizontal aligned="middle" size="tiny">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
 <br/>
<List horizontal aligned="middle" size="small">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
 <br/>
<List horizontal aligned="middle" size="large">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
 <br/>
<List horizontal aligned="middle" size="big">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
 <br/>
<List horizontal aligned="middle" size="huge">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
 <br/>
<List horizontal aligned="middle" size="massive">
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
    <Item>
        <Image avatar src="http://semantic-ui.com/images/avatar/small/daniel.jpg"/>
        <Content>
            <Header>header</Header>
        </Content>
    </Item>
 </List>
</div>
```
