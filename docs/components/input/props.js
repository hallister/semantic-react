/* eslint-disable */
exports.input = {
    "description": "",
    "props": {
        "action": {
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
        "fluid": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "focus": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "icon": {
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
            "description": "",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "name": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "placeholder": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'Search...'",
                "computed": false
            }
        },
        "size": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "state": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'disabled'",
                        "computed": false
                    },
                    {
                        "value": "'error'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "transparent": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "type": {
            "type": {
                "name": "string"
            },
            "required": true,
            "description": ""
        }
    }
}
/* eslint-enable */