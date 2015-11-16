/* eslint-disable */
exports.animations = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "enter": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "bool"
                    },
                    {
                        "name": "shape",
                        "value": {
                            "ease": {
                                "name": "string",
                                "required": false
                            },
                            "duration": {
                                "name": "number",
                                "required": false
                            },
                            "from": {
                                "name": "object",
                                "required": false
                            },
                            "to": {
                                "name": "object",
                                "required": false
                            }
                        }
                    }
                ]
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "leave": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "bool"
                    },
                    {
                        "name": "shape",
                        "value": {
                            "ease": {
                                "name": "string",
                                "required": false
                            },
                            "duration": {
                                "name": "number",
                                "required": false
                            },
                            "from": {
                                "name": "object",
                                "required": false
                            },
                            "to": {
                                "name": "object",
                                "required": false
                            }
                        }
                    }
                ]
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        }
    }
}
/* eslint-enable */