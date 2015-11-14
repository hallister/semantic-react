/* eslint-disable */
exports.list = {
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
        "animated": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "bulleted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "celled": {
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
        "divided": {
            "type": {
                "name": "bool"
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
        "link": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "ordered": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "relaxed": {
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