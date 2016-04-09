## Icon

    <Icon name="users"/>

### States:

#### Disabled:

    <Icon name="users" state="disabled"/>

#### Loading:

    <Icon name="asterisk" state="loading"/>

### Variations:

#### Fitted:

    <p>Tight spacing<Icon name="help" fitted/>Tight spacing</p>

#### Size:

    <div>
        <Icon name="home" size="mini"/>
        <Icon name="home" size="tiny"/>
        <Icon name="home" size="small"/>
        <Icon name="home"/>
        <Icon name="home" size="large"/>
        <Icon name="home" size="big"/>
        <Icon name="home" size="huge"/>
        <Icon name="home" size="massive"/>
    </div>

#### Link:

When passing onClick handler it automatically become link icon

    <div>
        <Icon name="close" link/>
        <Icon name="help" onClick={() => {}}/>
    </div>

#### Flipped:

    <div>
        <Icon name="cloud" flipped="horizontally" />
        <Icon name="cloud" flipped="vertically" />
    </div>

#### Rotated:

    <div>
        <Icon name="cloud" rotated="clockwise" />
        <Icon name="cloud" rotated="counterclockwise" />
    </div>

#### Circular:

    <div>
        <Icon name="users" circular/>
        <Icon name="users" color="teal" circular/>
        <Icon name="users" inverted circular/>
        <Icon name="users" inverted color="teal" circular/>
    </div>

#### Bordered:

    <div>
        <Icon name="users" bordered/>
        <Icon name="users" color="teal" bordered/>
        <Icon name="users" inverted bordered/>
        <Icon name="users" bordered color="teal" circular/>
    </div>

#### Colored:

    <div>
        <Icon name="users" color="red"/>
        <Icon name="users" color="orange"/>
        <Icon name="users" color="yellow"/>
        <Icon name="users" color="olive"/>
        <Icon name="users" color="green"/>
        <Icon name="users" color="teal"/>
        <Icon name="users" color="blue"/>
        <Icon name="users" color="violet"/>
        <Icon name="users" color="purple"/>
        <Icon name="users" color="pink"/>
        <Icon name="users" color="brown"/>
        <Icon name="users" color="grey"/>
        <Icon name="users" color="black"/>
    </div>

#### Inverted:

    <Segment inverted>
        <Icon inverted name="users" color="red"/>
        <Icon inverted name="users" color="orange"/>
        <Icon inverted name="users" color="yellow"/>
        <Icon inverted name="users" color="olive"/>
        <Icon inverted name="users" color="green"/>
        <Icon inverted name="users" color="teal"/>
        <Icon inverted name="users" color="blue"/>
        <Icon inverted name="users" color="violet"/>
        <Icon inverted name="users" color="purple"/>
        <Icon inverted name="users" color="pink"/>
        <Icon inverted name="users" color="brown"/>
        <Icon inverted name="users" color="grey"/>
        <Icon inverted name="users" color="black"/>
    </Segment>
