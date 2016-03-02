/* eslint-disable */
exports.item = {
    "description": "Item is collection of elements. It could be menu/dropdown item or part ofr <Items /> collection",
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
        }
    },
    "composes": [
        "../../defaultProps"
    ]
}
/* eslint-enable */
/* eslint-disable */
exports.items = {
    "description": "",
    "props": {
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
        "divided": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "link": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "relaxed": {
            "type": {
                "name": "custom",
                "raw": "React.PropTypes.relaxed"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */