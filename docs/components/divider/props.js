/* eslint-disable */
exports.divider = {
    "description": "",
    "props": {
        "aligned": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'horizontal'",
                        "computed": false
                    },
                    {
                        "value": "'vertical'",
                        "computed": false
                    }
                ]
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
        "clearing": {
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
        "header": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "hidden": {
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
        "type": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'fitted'",
                        "computed": false
                    },
                    {
                        "value": "'padded'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */