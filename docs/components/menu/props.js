/* eslint-disable */
exports.menu = {
    "description": "Menu. Could be simple or controlled. Controlled menu will be activated by providing value property and will manage\r\ncurrent active item and fire onChange callback when value was changed",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "Children nodes"
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
        "attached": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'top'",
                        "computed": false
                    },
                    {
                        "value": "'bottom'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "A menu may be attached to other content segments"
        },
        "borderless": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu item or menu can have no borders"
        },
        "even": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Use equal width for menu items"
        },
        "fitted": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "bool"
                    },
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'horizontally'",
                                "computed": false
                            },
                            {
                                "value": "'vertically'",
                                "computed": false
                            }
                        ]
                    }
                ]
            },
            "required": false,
            "description": "A menu item or menu can remove element padding, vertically or horizontally"
        },
        "fixed": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu can be fixed to a side of its context"
        },
        "fluid": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A vertical menu may take the size of its container. (A horizontal menu does this by default)"
        },
        "inverted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu may have its colors inverted to show greater contrast"
        },
        "menuValue": {
            "type": {
                "name": "any"
            },
            "required": false,
            "description": "Menu active value"
        },
        "onMenuChange": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "Callback for active item change. It will not fire if clicking at already active item",
            "defaultValue": {
                "value": "() => {}",
                "computed": false
            }
        },
        "onMenuItemClick": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "Callback for menu item click (regardless active or not active)",
            "defaultValue": {
                "value": "() => {}",
                "computed": false
            }
        },
        "pagination": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A pagination menu is specially formatted to present links to pages of content"
        },
        "pointing": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu can point to show its relationship to nearby content"
        },
        "right": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu can be formatted to float right"
        },
        "secondary": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu can adjust its appearance to de-emphasize its contents"
        },
        "tabular": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu can be formatted to show tabs of information"
        },
        "text": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A menu can be formatted for text content"
        },
        "vertical": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "A vertical menu displays elements vertically.."
        }
    },
    "composes": [
        "../../defaultProps"
    ]
}
/* eslint-enable */
/* eslint-disable */
exports.menuitem = {
    "description": "Menu/Dropdown item",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "Children nodes"
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
        }
    },
    "composes": [
        "../item/item"
    ]
}
/* eslint-enable */
