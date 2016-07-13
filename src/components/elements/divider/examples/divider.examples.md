# Divider
A divider visually segments content into groups
## Types
### Divider
A standard divider
* To add a divider between parts of a grid use a `divided grid` variation.

    <div>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Nam efficitur nibh eget commodo hendrerit. Nulla facilisi. Mauris commodo porttitor dolor.
        </span>
        <Divider />
        <span>
            Vivamus dui dui, eleifend vitae imperdiet ut, tristique bibendum ante. <br/>Fusce at orci ante. Nulla varius leo in ante cursus sodales.
        </span>
    </div>

### Vertical Divider
A divider can segment content vertically

* Vertical dividers requires `position: relative` on the element that you would like to contain the divider

* A vertical divider will automatically swap to a horizontal divider at mobile resolutions when used inside a `stackable grid`

    <Grid columns={3} relaxed="very" style={{position: "relative"}}>
        <Column>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Nam efficitur nibh eget commodo hendrerit. Nulla facilisi. Mauris commodo porttitor dolor.
        </Column>
        <Divider aligned="vertical">AND</Divider>
        <Column>
            Vivamus dui dui, eleifend vitae imperdiet ut, tristique bibendum ante. <br/>Fusce at orci ante. Nulla varius leo in ante cursus sodales.
        </Column>
        <Divider aligned="vertical">NOT</Divider>
        <Column>
            Etiam est erat, elementum eu urna ut, finibus sollicitudin metus. <br/>Morbi dapibus id risus quis ultrices. Nunc hendrerit est vitae elementum dignissim.
        </Column>
    </Grid>

### Horizontal Divider
A divider can segment content horizontally
* Horizontal dividers can also be used in combination with [headers](#Header) and [icons](#Icon) to create different styles of dividers.
* Dividers will automatically vary the size of their dividing rules to match the length of your text

    <Segment aligned="center" basic>
        <Input action placeholder="Order #">
            <Icon name="search"/>
            <Button color="blue">Search</Button>
        </Input>
        <Divider aligned="horizontal">Or</Divider>
        <IconButton name="add" color="teal">Create New Order</IconButton>
    </Segment>
