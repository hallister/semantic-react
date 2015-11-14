import { Divider, Header, Icon, Content } from '../../../src/components/elements';

export default {
    Default: {
        component: Divider
    },
    Header: {
        component: Header,
        props: {
            divider: true,
            horizontal: true
        },
        children: [{
            component: Icon,
            props: {
                name: 'tag'
            }
        }, {
            component: Content,
            children: 'Description'
        }]
    },
    Fitted: [
        'Section One',
        {
            component: Divider,
            props: {
                fitted: true
            }
        },
        'Section Two'
    ],
    Section: [
        'Section One',
        {
            component: Divider,
            props: {
                section: true
            }
        },
        'Section Two'
    ]
};
