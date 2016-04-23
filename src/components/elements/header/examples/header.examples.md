## Header

    <div>
        <Header component="h1">First Header</Header>
        <Header component="h2">First Header</Header>
        <Header component="h3">First Header</Header>
        <Header component="h4">First Header</Header>
        <Header component="h5">First Header</Header>
    </div>

### You can use div with size for header also

    <div>
        <Header size="huge">Header</Header>
        <Header size="large">Header</Header>
        <Header size="medium">Header</Header>
        <Header size="small">Header</Header>
        <Header size="tiny">Header</Header>
    </div>

## Icon header:

    <div>
    <Header size="tiny" icon="settings">
        <Content>
            Account settings
            <Header>Manage your account settings and set e-mail preference</Header>
        </Content>
    </Header>

    <Header aligned="center" 
            icon="users" 
            iconComponent={(props) => <Icon circular {...props}/>}
    >
        Friends
    </Header>
    </div>
    
## Header with icon content
This is slightly differ from icon header
    
    <Header size="small">
        <Icon name="plug"/>
        <Content>
            Uptime Guarantee
        </Content>
    </Header>

## Image header:

    <div>
        <Header>
            <Image src="http://semantic-ui.com/images/icons/school.png"/>
            <Content>
                Learn more
            </Content>
        </Header>
        <p></p>

        <Header>
            <Image shape="circular" src="http://semantic-ui.com/images/avatar2/large/patrick.png"/>
            Patrick
        </Header>
        <p></p>

        <Header>
            <Image src="http://semantic-ui.com/images/icons/plugin.png"/>
            <Content>
                Plug-ins
                <Header>Check out our plug-in marketplace</Header>
            </Content>
        </Header>
     </div>

## Header could be disabled

    <Header disabled>Disabled header</Header>

## Variations

### Dividing:

    <div>
    <Header emphasis="dividing">Dividing header</Header>
    <p>dasfdasfdsafds</p>
    </div>

### Block:

    <div>
    <Header emphasis="block">Block header</Header>
    <Image src="http://semantic-ui.com/images/wireframe/media-paragraph.png"/>
    </div>


### Attached header

    <div>
        <Header component="h3" attached="top">Top Attached</Header>
        <Segment attached><p></p></Segment>
        <Header component="h3" attached>Attached</Header>
        <Segment attached><p></p></Segment>
        <Header component="h3" attached="bottom">Bottom Attached</Header>
    </div>


### Floating:

    <Segment clearing>
        <Header component="h3" floated="right">Go forward</Header>
        <Header component="h3" floated="left">Go back</Header>
    </Segment>


### Text Alignment

    <Segment>
        <Header component="h3" aligned="right">Right</Header>
        <Header component="h3" aligned="left">Left</Header>
        <Header component="h3" aligned="justified">
            This should take up the full width even if only one line
        </Header>
        <Header component="h3" aligned="center">Center</Header>
    </Segment>

### Colored

    <div>
        <Header component="h4" color="red">Header</Header>
        <Header component="h4" color="orange">Header</Header>
        <Header component="h4" color="yellow">Header</Header>
        <Header component="h4" color="olive">Header</Header>
        <Header component="h4" color="green">Header</Header>
        <Header component="h4" color="teal">Header</Header>
        <Header component="h4" color="blue">Header</Header>
        <Header component="h4" color="purple">Header</Header>
        <Header component="h4" color="violet">Header</Header>
        <Header component="h4" color="pink">Header</Header>
        <Header component="h4" color="brown">Header</Header>
        <Header component="h4" color="grey">Header</Header>
    </div>

### Inverted

    <Segment inverted>
        <Header component="h4" inverted color="red">Header</Header>
        <Header component="h4" inverted color="orange">Header</Header>
        <Header component="h4" inverted color="yellow">Header</Header>
        <Header component="h4" inverted color="olive">Header</Header>
        <Header component="h4" inverted color="green">Header</Header>
        <Header component="h4" inverted color="teal">Header</Header>
        <Header component="h4" inverted color="blue">Header</Header>
        <Header component="h4" inverted color="purple">Header</Header>
        <Header component="h4" inverted color="violet">Header</Header>
        <Header component="h4" inverted color="pink">Header</Header>
        <Header component="h4" inverted color="brown">Header</Header>
        <Header component="h4" inverted color="grey">Header</Header>
    </Segment>


