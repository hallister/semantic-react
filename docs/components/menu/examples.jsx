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
                menuValue: 1
            },
            children: [
                {
                    component: MenuItem,
                    props: {
                        menuValue: 1
                    },
                    children: 'Item 1'
                },
                {
                    component: MenuItem,
                    props: {
                        menuValue: 2
                    },
                    children: 'Item 2'
                },
                {
                    component: MenuItem,
                    props: {
                        menuValue: 3
                    },
                    children: 'Item 3'
                }
            ]
        }
    ]
};
