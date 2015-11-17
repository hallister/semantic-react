import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';

import { Header } from '../src/components/elements';
import { Menu, Item } from '../src/components/views';
import { Grid, Column, Row } from '../src/components/collections';

import ComponentDoc from './componentdoc';

const components = {
    elements: [
        'Button',
        'Divider',
        'Flag',
        'Header',
        'Icon',
        'Image',
        'Input',
        'Label',
        'List',
        'Loader',
        'Rail',
        'Reveal',
        'Segment',
        'Simple'
    ],
    collections: [
        'Form',
        'Grid',
        'Message',
        'Table'
    ],
    views: [
        'Card',
        'Comment',
        'Feed',
        'Item',
        'Menu'
    ],
    modules: [
        'Accordion',
        'Animate',
        'Checkbox',
        'Dimmer',
        'Dropdown',
        'Modal',
        'Popup',
        'Progress',
        'Rating',
        'Search',
        'Tab'
    ]
}

class Docs extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        title: React.PropTypes.string
    };

    static defaultProps = {

    };

    renderComponents(header) {
        const comp = components[header.toLowerCase()].map(item => {
            let link = header.toLowerCase() + '/' + item.toLowerCase();
            return (
                <Link activeClassName="active"
                    className="item"
                    key={item}
                    to={link}
                >
                    {item}
                </Link>
            );
        });

        return (
            <Item>
                <Header item={false}>{header}</Header>
                <Menu>
                    {comp}
                </Menu>
            </Item>
        );
    }

    render() {
        let { children, ...other } = this.props;

        return (
            <Grid
                style={{ padding: 0, margin: 0 }}
            >
                <Row style={{ paddingTop: 0 }}>
                    <Column
                        color="black"
                        style={{ paddingLeft: 0 }}
                        width={2}
                    >
                        <Menu
                            inverted
                            style={{ marginTop: 0 }}
                            vertical
                        >
                            {this.renderComponents('Elements')}
                            {this.renderComponents('Collections')}
                            {this.renderComponents('Views')}
                            {this.renderComponents('Modules')}
                        </Menu>
                    </Column>
                    <Column width={12}>
                        {this.props.children}
                    </Column>
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render((
    <Router>
        <Route
            component={Docs}
            path="/"
        >
            <Route
                component={ComponentDoc}
                path=":type/:component" />
        </Route>
    </Router>
), document.getElementById('app'));
