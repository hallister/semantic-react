import React from 'react';
import { DropdownMenu, Select, Option } from '../../../src/components/modules';
import { Item } from '../../../src/components/views';

export default {
    default: [{
        component: DropdownMenu,
        props: {
            label: 'Simple dropdown menu'
        },
        children: [
            {
                component: Item,
                children: 'Item 1'
            },
            {
                component: Item,
                children: 'Item 2'
            },
            {
                component: Item,
                children: 'Item 3'
            },
            {
                component: Item,
                children: 'Item 4'
            },
            {
                component: Item,
                children: 'Item 5'
            }
        ]
    }],
    select: [
        {
            component: Select,
            props: {
                placeholder: 'Simple select'
            },
            children: [
                {
                    component: Option,
                    props: {
                        value: 'Opt1'
                    },
                    children: 'Option 1'
                },
                {
                    component: Option,
                    props: {
                        value: 'Opt2'
                    },
                    children: 'Option 2'
                },
                {
                    component: Option,
                    props: {
                        value: 'Opt3'
                    },
                    children: 'Option 3'
                }
            ]
        },
        {
            component: Select,
            props: {
                placeholder: 'Multiple',
                multiple: true
            },
            children: [
                {
                    component: Option,
                    props: {
                        value: 'Opt1'
                    },
                    children: 'Option 1'
                },
                {
                    component: Option,
                    props: {
                        value: 'Opt2'
                    },
                    children: 'Option 2'
                },
                {
                    component: Option,
                    props: {
                        value: 'Opt3'
                    },
                    children: 'Option 3'
                }
            ]
        },
        {
            component: Select,
            props: {
                placeholder: 'Multiple',
                multiple: true,
                search: true
            },
            children: [
                {
                    component: Option,
                    props: {
                        value: 'Opt1'
                    },
                    children: 'Option 1'
                },
                {
                    component: Option,
                    props: {
                        value: 'Opt2'
                    },
                    children: 'Option 2'
                },
                {
                    component: Option,
                    props: {
                        value: 'Opt3'
                    },
                    children: 'Option 3'
                }
            ]
        }
    ]
};
