import React from 'react';
import { Segment, Header, Rail, Item } from '../../components/elements';
import { Menu } from '../../components/views';
import * as Types from './button/types';
import * as Groups from './button/groups';
import * as Content from './button/content';
import * as States from './button/states';
import * as Variations from './button/variations';

const DOC = {
    Types: [
        {
            class: 'Button',
            id: 'button-types-button-example',
            header: 'Button',
            subheader: 'A standard button'
        },
        {
            class: 'Button2'
        },
        {
            class: 'Emphasis',
            id: 'button-types-emphasis-example',
            header: 'Emphasis',
            subheader: 'A button can be formatted to show different levels of emphasis'
        },
        {
            class: 'Emphasis2'
        },
        {
            class: 'Animated',
            id: 'button-types-animated-example',
            header: 'Animated',
            subheader: 'A button can animate to show hidden content'
        },
        {
            class: 'Labeled',
            id: 'button-types-labeled-example',
            header: 'Labeled',
            subheader: 'A button can appear alongside a label'
        },
        {
            class: 'Labeled2'
        },
        {
            class: 'Icon',
            id: 'button-types-icon-example',
            header: 'Icon',
            subheader: 'A button can have only an icon'
        },
        {
            class: 'LabeledIcon',
            id: 'button-types-labeledicon-example',
            header: 'Labeled Icon',
            subheader: 'A button can use an icon as a label'
        },
        {
            class: 'Basic',
            id: 'button-types-basic-example',
            header: 'Basic',
            subheader: 'A basic button is less pronounced'
        },
        {
            class: 'Inverted',
            id: 'button-types-inverted-example',
            header: 'Inverted',
            subheader: 'A button can be formatted to appear on dark backgrounds'
        },
        {
            class: 'Inverted2'
        }
    ],
    Groups: [
        {
            class: 'Buttons',
            id: 'button-groups-buttons-example',
            header: 'Buttons',
            subheader: 'Buttons can exist together as a group'
        },
        {
            class: 'IconButtons',
            id: 'button-groups-iconbuttons-example',
            header: 'Icon Buttons',
            subheader: 'Button groups can show groups of icons'
        }
    ],
    States: [
        {
            class: 'Active',
            id: 'button-states-active-example',
            header: 'Active',
            subheader: 'A button can show it is currently the active user selection'
        },
        {
            class: 'Disabled',
            id: 'button-states-disabled-example',
            header: 'Disabled',
            subheader: 'A button can show it is currently unable to be interacted with'
        },
        {
            class: 'Loading',
            id: 'button-states-loading-example',
            header: 'Loading',
            subheader: 'A button can show it is currently unable to be interacted with'
        }
    ],
    Variations: [
        {
            class: 'Social',
            id: 'button-variations-social-example',
            header: 'Social',
            subheader: 'A button can be formatted to link to a social website'
        },
        {
            class: 'Size',
            id: 'button-variations-size-example',
            header: 'Size',
            subheader: 'A button can have different sizes'
        },
        {
            class: 'Floated',
            id: 'button-variations-floated-example',
            header: 'Floated',
            subheader: '"A button can be aligned to the left or right of its container'
        },
        {
            class: 'Colored',
            id: 'button-variations-colored-example',
            header: 'Colored',
            subheader: 'A button can have different colors'
        },
        {
            class: 'Compact',
            id: 'button-variations-compact-example',
            header: 'Compact',
            subheader: 'A button can reduce its padding to fit into tighter spaces'
        },
        {
            class: 'Consequence',
            id: 'button-variations-consequence-example',
            header: 'Consequence',
            subheader: 'A button can hint towards a positive or negative consequence'
        },
        {
            class: 'Fluid',
            id: 'button-variations-fluid-example',
            header: 'Fluid',
            subheader: 'A button can take the width of its container'
        },
        {
            class: 'Circular',
            id: 'button-variations-circular-example',
            header: 'Circular',
            subheader: 'A button can be circular'
        },
        {
            class: 'Circular2'
        },
        {
            class: 'VerticallyAttached',
            id: 'button-variations-verticallyattached-example',
            header: 'Vertically Attached',
            subheader: 'A button can be attached to the top or bottom of other content'
        },
        {
            class: 'HorizontallyAttached',
            id: 'button-variations-horizontallyattached-example',
            header: 'Horizontally Attached',
            subheader: 'A button can be attached to the left or right of other content'
        }
    ]
};

export class ButtonDoc extends React.Component {
    render() {
        let documentDiv = [];
        let menuDiv = [];
 
        ['Types', 'Groups', 'States', 'Variations'].forEach(function(group) {
            documentDiv.push(
                <Header dividing tag="h1" key={group}>
                    {group}
                </Header>
            );

            let menuHeader = <Header key={group}>{group}</Header>;
            let menuItems = [];

            DOC[group].forEach(function(item) {
                if (item.id) {
                    menuItems.push(<Item key={item.class}><a href={'#' + item.id}>{item.header}</a></Item>);
                }


                let element = React.createElement(
                    eval(group + '.' + item.class + 'Doc'),
                    {
                        key: item.class,
                        id: item.id,
                        header: item.header,
                        subheader: item.subheader
                    }
                )

                documentDiv.push(element);
            });

            menuDiv.push(
                <Item key={Item + group}>
                    {menuHeader}
                    <Menu>
                        {menuItems}
                    </Menu>
                </Item>
            );
        });


        return (
            <Segment basic className="main ui container">
                <Rail float="right" dividing style={{minHeight: '1025px'}}>
                    <div className="ui sticky fixed top">
                        <Menu secondary vertical>
                            {menuDiv}
                        </Menu>
                    </div>
                </Rail>
               {documentDiv}
            </Segment>
        );
    }
}