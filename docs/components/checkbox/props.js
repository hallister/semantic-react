/* eslint-disable */
exports.checkbox = {
    "description": "",
    "props": {
        "checked": {
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
                "name": "any"
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
        "disabled": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "indeterminate": {
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
        "radio": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "readOnly": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "slider": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "toggle": {
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
exports.checkboxfields = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "array"
                    },
                    {
                        "name": "node"
                    }
                ]
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
        "disabled": {
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
            "required": true,
            "description": ""
        },
        "onClick": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": ""
        },
        "radio": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "readOnly": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "type": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'grouped'",
                        "computed": false
                    },
                    {
                        "value": "'inline'",
                        "computed": false
                    }
                ]
            },
            "required": true,
            "description": ""
        }
    }
}
/* eslint-enable */