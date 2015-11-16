/* eslint-disable */
exports.list = {
    "description": "",
    "props": {
        "aligned": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'top'",
                        "computed": false
                    },
                    {
                        "value": "'middle'",
                        "computed": false
                    },
                    {
                        "value": "'bottom'",
                        "computed": false
                    }
                ]
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
        "celled": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'divided'",
                                "computed": false
                            }
                        ]
                    },
                    {
                        "name": "bool"
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
        "floated": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'right'",
                        "computed": false
                    },
                    {
                        "value": "'left'",
                        "computed": false
                    }
                ]
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
        },
        "type": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'bulleted'",
                        "computed": false
                    },
                    {
                        "value": "'ordered'",
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