# Table
A table displays a collections of data grouped into rows
4 Themes

## Types

### Table
A standard table
* Tables will automatically stack their layouts for mobile devices. To disable this behavior, use the `unstackable` variation or `tablet stackable` to allow responsive adjustments for tablet.

#### Celled

    <Table celled>
        <thead>
        <Tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
        </Tr>
        </thead>
        <tbody>
        <Tr>
            <Td><Label ribbon>First</Label></Td>
            <Td>Cell</Td>
            <Td>Cell</Td>
        </Tr>
        <Tr>
            <Td>Cell</Td>
            <Td>Cell</Td>
            <Td>Cell</Td>
        </Tr>
        <Tr>
            <Td>Cell</Td>
            <Td>Cell</Td>
            <Td>Cell</Td>
        </Tr>
        </tbody>
        <tfoot>
        <Tr>
            <th colSpan={3}>
                <Menu floated="right" pagination>
                    <Item link><Icon name="chevron left"></Icon></Item>
                    <Item link>1</Item>
                    <Item link>2</Item>
                    <Item link>3</Item>
                    <Item link>4</Item>
                    <Item link><Icon name="chevron right"></Icon></Item>
                </Menu>
            </th>
        </Tr>
        </tfoot>
    </Table>

#### Padded

    <Table celled padded>
        <thead>
        <Tr>
            <th className="single line">Evidence Rating</th>
            <th>Effect</th>
            <th>Efficacy</th>
            <th>Consensus</th>
            <th>Comments</th>
        </Tr>
        </thead>
        <tbody>
        <Tr>
            <Td><Header aligned="center">A</Header></Td>
            <Td singleLine>Power Output</Td>
            <Td><Rating star initialValue={3} max={3}/></Td>
            <Td aligned="right">80%<br/><a href="#">18 studies</a></Td>
            <Td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</Td>
        </Tr>
        <Tr>
            <Td><Header aligned="center">A</Header></Td>
            <Td singleLine>Weight</Td>
            <Td><Rating star initialValue={3} max={3} onChange={(index) => { }}/></Td>
            <Td aligned="right">100%<br/><a href="#">65 studies</a></Td>
            <Td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency.</Td>
        </Tr>
        </tbody>
    </Table>

#### Basic

    <Table celled collapsing basic="very">
        <thead>
        <Tr>
            <th>Employee</th>
            <th>Correct Guesses</th>
        </Tr>
        </thead>
        <tbody>
        <Tr>
            <Td>
                <Header>
                    <Image src="http://semantic-ui.com/images/avatar2/small/lena.png" shape="rounded" size="mini"/>
                    <Content>
                        Lena
                        <SubHeader>Human Resources</SubHeader>
                    </Content>
                </Header>
            </Td>
            <Td>
                22
            </Td>
        </Tr>
        <Tr>
            <Td>
                <Header>
                    <Image src="http://semantic-ui.com/images/avatar2/small/matthew.png" shape="rounded" size="mini"/>
                    <Content>
                        Matthew
                        <SubHeader>Fabric Design</SubHeader>
                    </Content>
                </Header>
            </Td>
            <Td>
                15
            </Td>
        </Tr>
        <Tr>
            <Td>
                <Header>
                    <Image src="http://semantic-ui.com/images/avatar2/small/lindsay.png" shape="rounded" size="mini"/>
                    <Content>
                        Lindsay
                        <SubHeader>Entertainment</SubHeader>
                    </Content>
                </Header>
            </Td>
            <Td>
                12
            </Td>
        </Tr>
        <Tr>
            <Td>
                <Header>
                    <Image src="http://semantic-ui.com/images/avatar2/small/mark.png" shape="rounded" size="mini"/>
                    <Content>
                        Mark
                        <SubHeader>Executive</SubHeader>
                    </Content>
                </Header>
            </Td>
            <Td>
                11
            </Td>
        </Tr>
        </tbody>
    </Table>

#### Striped

    <Table celled striped>
        <thead>
        <Tr>
            <th colSpan={3}>Git Repository</th>
        </Tr>
        </thead>
        <tbody>
        <Tr>
            <Td collapsing>
                <Icon name="folder"/>
                node_modules
            </Td>
            <Td>Initial commit</Td>
            <Td collapsing aligned="right">10 hours ago</Td>
        </Tr>
        <Tr>
            <Td collapsing>
                <Icon name="folder"/>
                test
            </Td>
            <Td>Initial commit</Td>
            <Td collapsing aligned="right">10 hours ago</Td>
        </Tr>
        <Tr>
            <Td collapsing>
                <Icon name="folder"/>
                build
            </Td>
            <Td>Initial commit</Td>
            <Td collapsing aligned="right">10 hours ago</Td>
        </Tr>
        <Tr>
            <Td collapsing>
                <Icon name="file outline"/>
                package.json
            </Td>
            <Td>Initial commit</Td>
            <Td collapsing aligned="right">10 hours ago</Td>
        </Tr>
        <Tr>
            <Td collapsing>
                <Icon name="file outline"/>
                Gruntfile.js
            </Td>
            <Td>Initial commit</Td>
            <Td collapsing aligned="right">10 hours ago</Td>
        </Tr>
        </tbody>
    </Table>

### Definition
A table may be formatted to emphasize a first column that defines a rows content
* Definition tables are designed to display on a single background color. You can adjust this by changing `@definitionPageBackground`, or specifying a background color on the first cell

    <Table definition>
        <thead>
        <Tr>
            <th></th>
            <th>Arguments</th>
            <th>Description</th>
        </Tr>
        </thead>
        <tbody>
        <Tr>
            <Td>reset rating</Td>
            <Td>None</Td>
            <Td>Resets rating to default value</Td>
        </Tr>
        <Tr>
            <Td>set rating</Td>
            <Td>rating (integer)</Td>
            <Td>Sets the current star rating to specified value</Td>
        </Tr>
        </tbody>
    </Table>

#### Celled & compact

    <Table definition celled compact>
        <thead>
        <Tr>
            <th></th>
            <th>Name</th>
            <th>Registration Date</th>
            <th>E-mail address</th>
            <th>Premium Plan</th>
        </Tr>
        </thead>
        <tbody>
        <Tr>
            <Td collapsing><Checkbox type="slider" fitted/></Td>
            <Td>John Lilki</Td>
            <Td>September 14, 2013</Td>
            <Td>jhlilk22@yahoo.com</Td>
            <Td>No</Td>
        </Tr>
        <Tr>
            <Td collapsing><Checkbox type="slider" fitted/></Td>
            <Td>Jamie Harington</Td>
            <Td>January 11, 2014</Td>
            <Td>jamieharingonton@yahoo.com</Td>
            <Td>Yes</Td>
        </Tr>
        <Tr>
            <Td collapsing><Checkbox type="slider" fitted/></Td>
            <Td>Jill Lewis</Td>
            <Td>May 11, 2014</Td>
            <Td>jilsewris22@yahoo.com</Td>
            <Td>Yes</Td>
        </Tr>
        </tbody>
        <tfoot>
        <Tr>
            <th/>
            <th colSpan={4}>
                <IconButton emphasis="primary" name="user" floated="right" size="small">Add User</IconButton>
                <Button size="small">Approve</Button>
                <Button size="small" disabled>Approve All</Button>
            </th>
        </Tr>
        </tfoot>
    </Table>
