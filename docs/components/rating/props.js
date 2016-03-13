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
        "initialValue": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "The (initial) value of the component"
        },
        "max": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "Max stars count",
            "defaultValue": {
                "value": "5",
                "computed": false
            }
        },
        "onChange": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "Callback on click to star"
        },
        "size": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'mini'",
                        "computed": false
                    },
                    {
                        "value": "'tiny'",
                        "computed": false
                    },
                    {
                        "value": "'small'",
                        "computed": false
                    },
                    {
                        "value": "'medium'",
                        "computed": false
                    },
                    {
                        "value": "'large'",
                        "computed": false
                    },
                    {
                        "value": "'big'",
                        "computed": false
                    },
                    {
                        "value": "'huge'",
                        "computed": false
                    },
                    {
                        "value": "'massive'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "Adds a SemanticUI size class."
        },
        "star": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
