/* eslint-disable */
exports.item = {
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
                "name": "union",
                "value": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "object"
                    }
                ]
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
                    },
                    {
                        "name": "func"
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
        "link": {
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
        "onClick": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": ""
        },
        "selected": {
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