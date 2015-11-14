/* eslint-disable */
exports.header = {
    "description": "",
    "props": {
        "aligned": {
            "type": {
                "name": "enum",
                "computed": true,
                "value": "validProps.aligned"
            },
            "required": false,
            "description": ""
        },
        "attached": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "computed": true,
                        "value": "validProps.attached"
                    },
                    {
                        "name": "bool"
                    }
                ]
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "block": {
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
        "color": {
            "type": {
                "name": "string"
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
        "divider": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "dividing": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "element": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "floated": {
            "type": {
                "name": "enum",
                "computed": true,
                "value": "validProps.floated"
            },
            "required": false,
            "description": ""
        },
        "horizontal": {
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
        "item": {
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
        "onClick": {
            "type": {
                "name": "func"
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
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.subheader = {
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
        }
    }
}
/* eslint-enable */