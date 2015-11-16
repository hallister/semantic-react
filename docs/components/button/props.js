/* eslint-disable */
exports.button = {
    "description": "",
    "props": {
        "animated": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'fade'",
                                "computed": false
                            },
                            {
                                "value": "'vertical'",
                                "computed": false
                            }
                        ]
                    },
                    {
                        "name": "bool"
                    }
                ]
            },
            "required": false,
            "description": "Adds a fade or slide animation on hover.",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "attached": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'left'",
                                "computed": false
                            },
                            {
                                "value": "'right'",
                                "computed": false
                            },
                            {
                                "value": "'bottom'",
                                "computed": false
                            },
                            {
                                "value": "'top'",
                                "computed": false
                            }
                        ]
                    },
                    {
                        "name": "bool"
                    }
                ]
            },
            "required": false,
            "description": "It's attached to some other attachable component.",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "basic": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Adds simple styling to the component."
        },
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "The child nodes of the component."
        },
        "circular": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Gives a circular shape to the component."
        },
        "className": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "Adds additional classes to the component."
        },
        "color": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI color class."
        },
        "compact": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Reduces the padding on the component."
        },
        "component": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": "Overrides the component with a custom component string ('div') or ReactElement."
        },
        "defaultClasses": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Adds the default classes for the component.",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "floated": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'right'",
                        "computed": false
                    },
                    {
                        "value": "'left'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "Forces to component to float left or right."
        },
        "fluid": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "The component fills the parent components horizontal space."
        },
        "icon": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Overrides default behavior and adds the icon class to the component."
        },
        "inverted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Styles the component for a dark background."
        },
        "labeled": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'right'",
                                "computed": false
                            },
                            {
                                "value": "'left'",
                                "computed": false
                            }
                        ]
                    },
                    {
                        "name": "bool"
                    }
                ]
            },
            "required": false,
            "description": "Defines whether the label is to the right or left of the component (LabeledButton)."
        },
        "loading": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Displays a loading indicator on the component."
        },
        "size": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI size class."
        },
        "social": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI social class (SocialButton)."
        },
        "state": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'active'",
                        "computed": false
                    },
                    {
                        "value": "'disabled'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "Indicates whether the button is currently highlighted or disabled."
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.buttons = {
    "description": "",
    "props": {
        "attached": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'bottom'",
                        "computed": false
                    },
                    {
                        "value": "'top'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "It's attached to some other attachable component."
        },
        "basic": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Adds simple styling to the component."
        },
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "The child nodes of the component."
        },
        "className": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "Adds additional classes to the component."
        },
        "color": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI color class."
        },
        "compact": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Reduces the padding on the component."
        },
        "component": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": "Overrides the component with a custom component string ('div') or\r\nReactElement.",
            "defaultValue": {
                "value": "'div'",
                "computed": false
            }
        },
        "defaultClasses": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Adds the default classes for the component.",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "equal": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Forces all children to an equal width."
        },
        "floated": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'right'",
                        "computed": false
                    },
                    {
                        "value": "'left'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "Forces to component to float left or right."
        },
        "icon": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Overrides default behavior and adds the icon class to the component."
        },
        "inverted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Styles the component for a dark background."
        },
        "labeled": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Overrides default behavior and adds the labeled class to the\r\ncomponent."
        },
        "size": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI size class."
        },
        "vertical": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Forces child components to render vertically."
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.iconbutton = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "The child nodes of the component."
        },
        "iconColor": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI color class to the icon."
        },
        "name": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI name class to the icon."
        },
        "social": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Renders as a social button if true (see SocialButton);"
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.labeledbutton = {
    "description": "",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "basic": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "circular": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "className": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "color": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "compact": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "component": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "defaultClasses": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "disabled": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "fluid": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "focusable": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "icon": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "inverted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "labeled": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "string"
                    },
                    {
                        "name": "bool"
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "loading": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "negative": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "positive": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "primary": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "secondary": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "size": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "social": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.socialbutton = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "The child nodes of the component."
        },
        "name": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Adds a SemanticUI name class to the icon."
        }
    }
}
/* eslint-enable */