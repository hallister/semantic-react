import { Divider, Header, Icon, Content, Segment } from '../../../src/components/elements';

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
    Type: [
        {
            component: Segment,
            props: {
                basic: true
            },
            children: [
                'Section One',
                {
                    component: Divider,
                    props: {
                        type: 'fitted'
                    }
                },
                'Section Two'
            ]
        }, {
            component: Segment,
            props: {
                basic: true
            },
            children: [
                'Section One',
                {
                    component: Divider,
                    props: {
                        type: 'padded'
                    }
                },
                'Section Two'
            ]
        }
    ]
};
