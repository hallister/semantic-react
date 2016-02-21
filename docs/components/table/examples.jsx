import { Colors } from '../../utilities';
import { Table, Tr, Td }from '../../../src/components/collections';
import { Label, Icon }from '../../../src/components/elements';
import { Menu, Item }from '../../../src/components/views';

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
    }
};
