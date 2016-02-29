import { Menu, MenuItem } from '../../../src/components/views';
export default {
    default: [
        {
            component: Menu,
            children: [
                {
                    component: MenuItem,
                    children: 'Item 1'
                },
                {
                    component: MenuItem,
                    children: 'Item 2'
                }
            ]
        }
    ],
    controlled: [
        {
            component: Menu,
            props: {
                value: 1
            },
            children: [
                {
                    component: MenuItem,
                    props: {
                        value: 1
                    },
                    children: 'Item 1'
                },
                {
                    component: MenuItem,
                    props: {
                        value: 2
                    },
                    children: 'Item 2'
                },
                {
                    component: MenuItem,
                    props: {
                        value: 3
                    },
                    children: 'Item 3'
                }
            ]
        }
    ]
};
