# Statistic

## A statistic can display a value with a label above or below it by the order you set.

Label below:

    <Statistic>
        <Value>5,500</Value>
        <Label>Downloads</Label>
    </Statistic>

Label above:

    <Statistic>
        <Label>views</Label>
        <Value>40,509</Value>
    </Statistic>

## But you can build a default label-below Statistic by single-line:

    <Statistic value="5,500" label="Downloads" />

## Horizontal Statistic

A statistic can present its measurement horizontally.

    <Statistic horizontal>
        <Value>5,500</Value>
        <Label>Downloads</Label>
    </Statistic>

## Colored

A statistic can be formatted to be different colors

    <Statistics>
        <Statistic color="red" value="27" label="red"/>
        <Statistic color="orange" value="27" label="orange"/>
        <Statistic color="yellow" value="27" label="yellow"/>
        <Statistic color="olive" value="27" label="olive"/>
        <Statistic color="green" value="27" label="green"/>
        <Statistic color="teal" value="27" label="teal"/>
        <Statistic color="blue" value="27" label="blue"/>
        <Statistic color="violet" value="27" label="violet"/>
        <Statistic color="pupple" value="27" label="pupple"/>
        <Statistic color="pink" value="27" label="pink"/>
        <Statistic color="brown" value="27" label="brown"/>
        <Statistic color="grey" value="27" label="grey"/>
    </Statistics>

## Inverted

    <Segment inverted>
        <Statistic inverted color="red" value="27" label="red"/>
        <Statistic inverted color="orange" value="27" label="orange"/>
        <Statistic inverted color="yellow" value="27" label="yellow"/>
        <Statistic inverted color="olive" value="27" label="olive"/>
        <Statistic inverted color="green" value="27" label="green"/>
        <Statistic inverted color="teal" value="27" label="teal"/>
        <Statistic inverted color="blue" value="27" label="blue"/>
        <Statistic inverted color="violet" value="27" label="violet"/>
        <Statistic inverted color="pupple" value="27" label="pupple"/>
        <Statistic inverted color="pink" value="27" label="pink"/>
        <Statistic inverted color="brown" value="27" label="brown"/>
        <Statistic inverted color="grey" value="27" label="grey"/>
    </Segment>

## Floated

    <Segment>
        <Statistic floated="right">
            <Value>2,204</Value>
            <Label>Views</Label>
        </Statistic>
        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
        <Statistic floated="left">
            <Value>2,204</Value>
            <Label>Views</Label>
        </Statistic>
        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    </Segment>

## Size

A statistic can vary in size.

    <Segment>
        <Statistic size="mini" value="2,204" label="Views" />
        <Statistic size="tiny" value="2,204" label="Views" />
        <Statistic size="small" value="2,204" label="Views" />
        <Statistic value="2,204" label="Views" />
        <Statistic size="large" value="2,204" label="Views" />
        <Statistic size="huge" value="2,204" label="Views" />
    </Segment>
