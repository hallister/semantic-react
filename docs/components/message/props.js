/* eslint-disable */
exports.message = {
    "description": "",
    "props": {
        "attached": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'bottom'",
                                "computed": false
                            },
                            {
                                "value": "'top'",
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
        "className": {
            "type": {
                "name": "any"
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
        "compact": {
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
        "floating": {
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
        "icon": {
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
        "state": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'success'",
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
        "type": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'info'",
                        "computed": false
                    },
                    {
                        "value": "'warning'",
                        "computed": false
                    },
                    {
                        "value": "'positive'",
                        "computed": false
                    },
                    {
                        "value": "'negative'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "visible": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */