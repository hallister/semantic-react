import { Colors } from '../../utilities';
import { Button,
         Buttons,
         Content,
         Icon,
         IconButton,
         Label,
         LabeledButton,
         PrimaryButton,
         SuccessButton,
         WarningButton,
         DangerButton } from '../../../src/components/elements';

export default {
    Default: {
        component: Button,
        children: 'Button'
    },
    Animate: [{
        component: Button,
        props: {
            animated: true
        },
        children: [{
            component: Content,
            props: {
                visible: true
            },
            children: 'Shop'
        }, {
            component: Content,
            props: {
                hidden: true
            },
            children: {
                component: Icon,
                props: {
                    name: 'shop'
                }
            }
        }]
    }, {
        component: Button,
        props: {
            animated: 'fade'
        },
        children: [{
            component: Content,
            props: {
                visible: true
            },
            children: 'Sign-up for a Pro account'
        }, {
            component: Content,
            props: {
                hidden: true
            },
            children: '$12.99 a month'
        }]
    }],
    Buttons: [{
        component: Buttons,
        props: {
            style: {
                paddingRight: '5'
            }
        },
        children: [{
            component: Button,
            props: {
                color: 'black'
            },
            children: 'Accept'
        }, {
            component: DangerButton,
            children: 'Decline'
        }]
    }, {
        component: Buttons,
        children: [{
            component: Button,
            props: {
                color: 'black'
            },
            children: 'Accept'
        }, {
            component: 'div',
            props: {
                className: 'or'
            }
        }, {
            component: DangerButton,
            children: 'Decline'
        }]
    }],
    Color: {
        component: Button,
        each: Colors,
        do: {
            children: true,
            props: {
                color: true,
                key: true,
                style: {
                    marginTop: 5
                }
            }
        }
    },
    Emphasis: [{
        component: PrimaryButton,
        children: 'Primary',
        style: {
            marginTop: 5
        }
    }, {
        component: SuccessButton,
        children: 'Success',
        style: {
            marginTop: 5
        }
    }, {
        component: WarningButton,
        children: 'Warning',
        style: {
            marginTop: 5
        }
    }, {
        component: DangerButton,
        children: 'Danger',
        style: {
            marginTop: 5
        }
    }],
    Icon: [{
        component: IconButton,
        props: {
            name: 'shop'
        }
    }, {
        component: IconButton,
        props: {
            name: 'heart',
            color: 'blue',
            iconColor: 'white'
        }
    }],
    LabeledButton: [{
        component: LabeledButton,
        children: [{
            component: Icon,
            props: {
                name: 'heart'
            }
        },
        'Like',
        {
            component: Label,
            props: {
                basic: true
            },
            children: '2,058'
        }]
    }, {
        component: LabeledButton,
        children: [{
            component: Label,
            props: {
                basic: true,
                pointing: 'right'
            },
            children: '2,058'
        }, {
            component: Icon,
            props: {
                name: 'heart'
            }
        }]
    }, {
        component: LabeledButton,
        children: [{
            component: Label,
            props: {
                basic: true
            },
            children: '1,048'
        }, {
            component: Icon,
            props: {
                name: 'fork'
            }
        }]
    }]
};
