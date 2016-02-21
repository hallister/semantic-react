import { Colors } from '../../utilities';
import { Table, Tr, Td }from '../../../src/components/collections';
import { Label, Icon, Header, Image, Content, SubHeader }from '../../../src/components/elements';
import { Menu, Item }from '../../../src/components/views';
import { Rating }from '../../../src/components/modules';

export default {
    Celled: {
        component: Table,
        props: {
            celled: true
        },
        children: [
            {
                component: 'thead',
                children:
                    {
                        component: Tr,
                        children: [
                            {
                                component: 'th',
                                children: 'Header'
                            },
                            {
                                component: 'th',
                                children: 'Header'
                            },
                            {
                                component: 'th',
                                children: 'Header'
                            }
                        ]
                    }

            },
            {
                component: 'tbody',
                children: [
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: {
                                    component: Label,
                                    props: {
                                        ribbon: true
                                    },
                                    children: 'First'
                                }
                            },
                            {
                                component: Td,
                                children: 'Cell'
                            },
                            {
                                component: Td,
                                children: 'Cell'
                            }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: 'Cell'
                            },
                            {
                                component: Td,
                                children: 'Cell'
                            },
                            {
                                component: Td,
                                children: 'Cell'
                            }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: 'Cell'
                            },
                            {
                                component: Td,
                                children: 'Cell'
                            },
                            {
                                component: Td,
                                children: 'Cell'
                            }
                        ]
                    }
                ]


            },
            {
                component: 'tfoot',
                children:
                {
                    component: Tr,
                    children:
                        {
                            component: 'th',
                            props: {
                                colSpan: "3"
                            },
                            children: {
                                component: Menu,
                                children: [
                                    {
                                        component: Item,
                                        props: {
                                            link: true,
                                            className: 'icon' // TODO Add to Item as prop?
                                        },
                                        children: {
                                            component: Icon,
                                            props: {
                                                name: 'chevron',
                                                className: 'left' // TODO Add to Icon as prop?
                                            }
                                        }
                                    },
                                    {
                                        component: Item,
                                        props: {
                                            link: true
                                        },
                                        children: '1'
                                    },
                                    {
                                        component: Item,
                                        props: {
                                            link: true
                                        },
                                        children: '2'
                                    },
                                    {
                                        component: Item,
                                        props: {
                                            link: true
                                        },
                                        children: '3'
                                    },
                                    {
                                        component: Item,
                                        props: {
                                            link: true
                                        },
                                        children: '4'
                                    },
                                    {
                                        component: Item,
                                        props: {
                                            link: true,
                                            className: 'icon' // TODO Add to Item as prop?
                                        },
                                        children: {
                                            component: Icon,
                                            props: {
                                                name: 'chevron',
                                                className: 'right' // TODO Add to Icon as prop?
                                            }
                                        }
                                    }
                                ],
                                props: {
                                    floated: 'right'
                                }
                            }
                        }
                }

            }
        ]
    },
    Padded: {
        component: Table,
        props: { celled: true, padded: true },
        children: [
            {
                component: 'thead',
                children:
                    {
                        component: Tr,
                        children: [
                            {
                                component: 'th',
                                props: {
                                    className: 'single line' // TODO Time to create a Th component?
                                },
                                children: 'Evidence Rating'
                            },
                            { component: 'th', children: 'Effect' },
                            { component: 'th', children: 'Efficacy' },
                            { component: 'th', children: 'Consensus' },
                            { component: 'th', children: 'Comments' }
                        ]
                    }

            },
            {
                component: 'tbody',
                children: [
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: {
                                    component: Header,
                                    props: { aligned: 'center' },
                                    children: 'A'
                                }
                            },
                            {
                                component: Td,
                                props: { singleLine: true },
                                children: 'Power Output'
                            },
                            {
                                component: Td,
                                children: {
                                    component: Rating,
                                    props: {
                                        star: true,
                                        max: 3 // FIXME Cannot set active through props
                                    }
                                }
                            },
                            {
                                component: Td,
                                props: { aligned: 'right' },
                                children: [
                                    '80%',
                                    { component: 'br' },
                                    { component: 'a', props: { href: '#' }, children: '18 studies' }
                                ]
                            },
                            {
                                component: Td,
                                children: 'Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.'
                            }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: {
                                    component: Header,
                                    props: { aligned: 'center' },
                                    children: 'A'
                                }
                            },
                            {
                                component: Td,
                                props: { singleLine: true },
                                children: 'Weight'
                            },
                            {
                                component: Td,
                                children: {
                                    component: Rating,
                                    props: {
                                        star: true,
                                        max: 3 // FIXME Cannot set active through props
                                    }
                                }
                            },
                            {
                                component: Td,
                                props: { aligned: 'right' },
                                children: [
                                    '100%',
                                    { component: 'br' },
                                    { component: 'a', props: { href: '#' }, children: '65 studies' }
                                ]
                            },
                            {
                                component: Td,
                                children: 'Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency'
                            }
                        ]
                    }
                ]


            }
        ]
    },
    Basic: {
        component: Table,
        props: {
            celled: true,
            basic: 'very',
            collapsing: true
        },
        children: [
            {
                component: 'thead',
                children:
                    {
                        component: Tr,
                        children: [
                            { component: 'th', children: 'Employee' },
                            { component: 'th', children: 'Correct Guesses' }
                        ]
                    }

            },
            {
                component: 'tbody',
                children: [
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: {
                                    component: Header,
                                    props: { className: 'image' }, // TODO Add "image" Header variant?
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/lena.png',
                                                shape: 'rounded',
                                                className: 'mini' // TODO Add "mini" Image variant?
                                            }
                                        },
                                        {
                                            component: Content,
                                            children: [
                                                'Lena',
                                                { component: SubHeader, children: 'Human Resources' }
                                            ]
                                        }
                                    ]
                                }
                            },
                            { component: Td, children: '11' }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: {
                                    component: Header,
                                    props: { className: 'image' }, // TODO Add "image" Header variant?
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/matthew.png',
                                                shape: 'rounded',
                                                className: 'mini' // TODO Add "mini" Image variant?
                                            }
                                        },
                                        {
                                            component: Content,
                                            children: [
                                                'Matthew',
                                                { component: SubHeader, children: 'Fabric Design' }
                                            ]
                                        }
                                    ]
                                }
                            },
                            { component: Td, children: '11' }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: {
                                    component: Header,
                                    props: { className: 'image' }, // TODO Add "image" Header variant?
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/lindsay.png',
                                                shape: 'rounded',
                                                className: 'mini' // TODO Add "mini" Image variant?
                                            }
                                        },
                                        {
                                            component: Content,
                                            children: [
                                                'Lindsay',
                                                { component: SubHeader, children: 'Entertainment' }
                                            ]
                                        }
                                    ]
                                }
                            },
                            { component: Td, children: '11' }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                children: {
                                    component: Header,
                                    props: { className: 'image' }, // TODO Add "image" Header variant?
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/mark.png',
                                                shape: 'rounded',
                                                className: 'mini' // TODO Add "mini" Image variant?
                                            }
                                        },
                                        {
                                            component: Content,
                                            children: [
                                                'Mark',
                                                { component: SubHeader, children: 'Executive' }
                                            ]
                                        }
                                    ]
                                }
                            },
                            { component: Td, children: '11' }
                        ]
                    }
                ]


            }
        ]
    }
};
