/* eslint-disable */
exports.dropdown = {
    "description": "",
    "props": {
        "active": {
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
        "className": {
            "type": {
                "name": "node"
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
                    },
                    {
                        "name": "func"
                    }
                ]
            },
            "required": false,
            "description": "",
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
        "error": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "floating": {
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
        "inline": {
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
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "multiple": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "pointing": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "bool"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "scrolling": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "search": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "selection": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "visible": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.dropdownmenu = {
    "description": "Dropdown menu with animations",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Should menu be opened when first rendered",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "Children nodes"
        },
        "dropdownComponent": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "string"
                    },
                    {
                        "name": "func"
                    }
                ]
            },
            "required": false,
            "description": "Pass additional component to use in dropdown, for example Button.\r\nIf you specify it, then default icon and label won't be rendered",
            "defaultValue": {
                "value": "'div'",
                "computed": false
            }
        },
        "enterAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "Enter animations transforms",
            "defaultValue": {
                "value": "{\r\n    height: 'auto'\r\n}",
                "computed": false
            }
        },
        "icon": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Menu icon",
            "defaultValue": {
                "value": "'dropdown'",
                "computed": false
            }
        },
        "label": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Menu label"
        },
        "leaveAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "Leave animation",
            "defaultValue": {
                "value": "{\r\n    height: 0\r\n}",
                "computed": false
            }
        },
        "menuComponent": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "string"
                    },
                    {
                        "name": "func"
                    }
                ]
            },
            "required": false,
            "description": "Specify component to be used as Menu.\r\nUsually is should be menu but with custom options applied (for example inverted)"
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.option = {
    "description": "Select dropdown option",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "component": {
            "type": {
                "name": "custom",
                "raw": "elementType"
            },
            "required": false,
            "description": "Use other component for composing results\r\n@example\r\n<Grid component={Container}>...</Grid>",
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
            "description": "Apply default semantic UI classes for component, for example ui button",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "className": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Additional CSS ui classes"
        },
        "link": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Make item clickable"
        },
        "onClick": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "Item click handler"
        },
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Is item active"
        },
        "color": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Item color"
        },
        "menuValue": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "number"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": "Item value (used in controlled menu)"
        },
        "value": {
            "type": {
                "name": "string"
            },
            "required": true,
            "description": ""
        }
    },
    "composes": [
        "../../views/menu/menuitem"
    ]
}
/* eslint-enable */
/* eslint-disable */
exports.select = {
    "description": "A dropdown component intended to behave exactly as the\r\nHTML select component.",
    "props": {
        "active": {
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
        "className": {
            "type": {
                "name": "node"
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
        "enterAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    height: 'auto'\r\n}",
                "computed": false
            }
        },
        "fluid": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "glyphWidth": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "1.0714",
                "computed": false
            }
        },
        "ignoreCase": {
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
        "leaveAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    height: 0\r\n}",
                "computed": false
            }
        },
        "multiple": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "name": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "noResults": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'No results found...'",
                "computed": false
            }
        },
        "placeholder": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "search": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */