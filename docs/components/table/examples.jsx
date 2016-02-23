import { Table, Tr, Td }from '../../../src/components/collections';
import { Label, Icon, Header, Image, Content, SubHeader, IconButton, Button }from '../../../src/components/elements';
import { Menu, Item }from '../../../src/components/views';
import { Rating, Checkbox }from '../../../src/components/modules';

export default {
    Celled: {
        component: Table,
        props: {
            celled: true
        },
        children: [
            {
                component: 'thead',
                children: {
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
                children: {
                    component: Tr,
                    children: {
                        component: 'th',
                        props: {
                            colSpan: '3'
                        },
                        children: {
                            component: Menu,
                            props: {
                                floated: 'right',
                                pagination: true
                            },
                            children: [
                                {
                                    component: Item,
                                    props: {
                                        link: true
                                    },
                                    children: {
                                        component: Icon,
                                        props: {
                                            name: 'chevron',
                                            left: true
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
                                        icon: true
                                    },
                                    children: {
                                        component: Icon,
                                        props: {
                                            name: 'chevron',
                                            right: true
                                        }
                                    }
                                }
                            ]
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
                children: {
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
                                        value: 3,
                                        max: 3
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
                                        value: 3,
                                        max: 3
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
                children: {
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
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/lena.png',
                                                shape: 'rounded',
                                                size: 'mini'
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
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/matthew.png',
                                                shape: 'rounded',
                                                size: 'mini'
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
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/lindsay.png',
                                                shape: 'rounded',
                                                size: 'mini'
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
                                    children: [
                                        {
                                            component: Image,
                                            props: {
                                                src: 'http://semantic-ui.com/images/avatar2/small/mark.png',
                                                shape: 'rounded',
                                                size: 'mini'
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
    },
    Striped: {
        component: Table,
        props: {
            celled: true,
            striped: true
        },
        children: [
            {
                component: 'thead',
                children: {
                    component: Tr,
                    children: {
                        component: 'th',
                        props: {
                            colSpan: '3'
                        },
                        children: 'Git Repository'
                    }
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
                                props: {
                                    collapsing: true
                                },
                                children: [
                                    {
                                        component: Icon,
                                        props: {
                                            name: 'folder'
                                        }
                                    },
                                    'node_modules'
                                ]
                            },
                            {
                                component: Td,
                                children: 'Initial commit'
                            },
                            {
                                component: Td,
                                props: {
                                    aligned: 'right',
                                    collapsing: true
                                },
                                children: '10 hours ago'
                            }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                props: {
                                    collapsing: true
                                },
                                children: [
                                    {
                                        component: Icon,
                                        props: {
                                            name: 'folder'
                                        }
                                    },
                                    'test'
                                ]
                            },
                            {
                                component: Td,
                                children: 'Initial commit'
                            },
                            {
                                component: Td,
                                props: {
                                    aligned: 'right',
                                    collapsing: true
                                },
                                children: '10 hours ago'
                            }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                props: {
                                    collapsing: true
                                },
                                children: [
                                    {
                                        component: Icon,
                                        props: {
                                            name: 'folder'
                                        }
                                    },
                                    'build'
                                ]
                            },
                            {
                                component: Td,
                                children: 'Initial commit'
                            },
                            {
                                component: Td,
                                props: {
                                    aligned: 'right',
                                    collapsing: true
                                },
                                children: '10 hours ago'
                            }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                props: {
                                    collapsing: true
                                },
                                children: [
                                    {
                                        component: Icon,
                                        props: {
                                            name: 'file outline'
                                        }
                                    },
                                    'package.json'
                                ]
                            },
                            {
                                component: Td,
                                children: 'Initial commit'
                            },
                            {
                                component: Td,
                                props: {
                                    aligned: 'right',
                                    collapsing: true
                                },
                                children: '10 hours ago'
                            }
                        ]
                    },
                    {
                        component: Tr,
                        children: [
                            {
                                component: Td,
                                props: {
                                    collapsing: true
                                },
                                children: [
                                    {
                                        component: Icon,
                                        props: {
                                            name: 'file outline'
                                        }
                                    },
                                    'Gruntfile.js'
                                ]
                            },
                            {
                                component: Td,
                                children: 'Initial commit'
                            },
                            {
                                component: Td,
                                props: {
                                    aligned: 'right',
                                    collapsing: true
                                },
                                children: '10 hours ago'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    Definition: [
        {
            component: Table,
            props: {
                definition: true
            },
            children: [
                {
                    component: 'thead',
                    children: {
                        component: Tr,
                        children: [
                            { component: 'th' },
                            { component: 'th', children: 'Arguments' },
                            { component: 'th', children: 'Description' }
                        ]
                    }

                },
                {
                    component: 'tbody',
                    children: [
                        {
                            component: Tr,
                            children: [
                                { component: Td, children: 'reset rating' },
                                { component: Td, children: 'None' },
                                { component: Td, children: 'Resets rating to default value' }
                            ]
                        },
                        {
                            component: Tr,
                            children: [
                                { component: Td, children: 'set rating' },
                                { component: Td, children: 'rating (integer)' },
                                { component: Td, children: 'Sets the current star rating to specified value' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            component: Table,
            props: {
                definition: true,
                celled: true,
                compact: true
            },
            children: [
                {
                    component: 'thead',
                    children: {
                        component: Tr,
                        children: [
                            { component: 'th' },
                            { component: 'th', children: 'Name' },
                            { component: 'th', children: 'Registration Date' },
                            { component: 'th', children: 'E-mail address' },
                            { component: 'th', children: 'Premium Plan' }
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
                                    props: { collapsing: true },
                                    children: {
                                        component: Checkbox,
                                        props: {
                                            slider: true,
                                            fitted: true
                                        }
                                    }
                                },
                                { component: Td, children: 'John Lilki' },
                                { component: Td, children: 'September 14, 2013' },
                                { component: Td, children: 'jhlilk22@yahoo.com' },
                                { component: Td, children: 'No' }
                            ]
                        },
                        {
                            component: Tr,
                            children: [
                                {
                                    component: Td,
                                    props: { collapsing: true },
                                    children: {
                                        component: Checkbox,
                                        props: {
                                            slider: true,
                                            fitted: true
                                        }
                                    }
                                },
                                { component: Td, children: 'Jamie Harington' },
                                { component: Td, children: 'January 11, 2014' },
                                { component: Td, children: 'jamieharingonton@yahoo.com' },
                                { component: Td, children: 'Yes' }
                            ]
                        },
                        {
                            component: Tr,
                            children: [
                                {
                                    component: Td,
                                    props: { collapsing: true },
                                    children: {
                                        component: Checkbox,
                                        props: {
                                            slider: true,
                                            fitted: true
                                        }
                                    }
                                },
                                { component: Td, children: 'Jill Lewis' },
                                { component: Td, children: 'May 11, 2014' },
                                { component: Td, children: 'jilsewris22@yahoo.com' },
                                { component: Td, children: 'Yes' }
                            ]
                        }
                    ]
                },
                {
                    component: 'tfoot',
                    props: {
                        className: 'full-width'
                    },
                    children: {
                        component: Tr,
                        children: [
                            { component: 'th' },
                            {
                                component: 'th',
                                props: {
                                    colSpan: '4'
                                },
                                children: [
                                    {
                                        component: IconButton,
                                        props: {
                                            floated: 'right',
                                            labeled: true,
                                            size: 'small',
                                            name: 'user',
                                            primary: true
                                        },
                                        children: 'Add User'
                                    },
                                    {
                                        component: Button,
                                        props: {
                                            size: 'small'
                                        },
                                        children: 'Approve'
                                    },
                                    {
                                        component: Button,
                                        props: {
                                            size: 'small',
                                            disabled: true
                                        },
                                        children: 'Approve All'
                                    }
                                ]
                            }
                        ]

                    }

                }
            ]
        }
    ]
};
