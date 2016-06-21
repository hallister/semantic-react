# Statistics:

## Statistic Group

    <Statistics>
        <Statistic value="22" label="faves" />
        <Statistic value="31,200" label="views" />
        <Statistic value="22" label="members" />
    </Statistics>

## A statistic can contain a numeric, icon, image, or text value

    <Statistics>
        <Statistic>
            <Value>
                <Icon name="plane" /> 5
            </Value>
            <Label>
                Flights
            </Label>
        </Statistic>
    </Statistics>

## Evenly Divided

    <Statistics even>
        <Statistic value={22} label="saves" />
        <Statistic>
            <Value text>
                Three<br/>
                Thousand
            </Value>
            <Label>signups</Label>
        </Statistic>
        <Statistic>
            <Value>
                <Image className="inline" shape="circular" src="http://semantic-ui.com/images/avatar/small/joe.jpg" /> 42
            </Value>
            <Label>Team Members</Label>
        </Statistic>
    </Statistics>


