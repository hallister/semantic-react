/* eslint-disable */
exports.divider = {
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
        "fitted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
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
        "section": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "vertical": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */