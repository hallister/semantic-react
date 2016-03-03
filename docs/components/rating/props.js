/* eslint-disable */
exports.rating = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "null",
                "computed": false
            }
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
        "heart": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "max": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "5",
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
        "star": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "value": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "The (initial) value of the component"
        },
    }
}
/* eslint-enable */
