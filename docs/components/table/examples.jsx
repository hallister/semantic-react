import { Colors } from '../../utilities';
import { Table, Tr, Td }from '../../../src/components/collections';
import { Label, Icon, Header }from '../../../src/components/elements';
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
    }
};
