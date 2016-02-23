/* eslint-disable */
exports.menu = {
    "description": "",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "attached": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'top'",
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
        "borderless": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
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
        "end": {
            "type": {
                "name": "shape",
                "value": {
                    "duration": {
                        "name": "number",
                        "required": false
                    },
                    "easing": {
                        "name": "string",
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
            },
            "required": false,
            "description": ""
        },
        "even": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "fitted": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "bool"
                    },
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'horizontally'",
                                "computed": false
                            },
                            {
                                "value": "'vertically'",
                                "computed": false
                            }
                        ]
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "fixed": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "fluid": {
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
        "pagination": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "pointing": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "right": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "secondary": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "start": {
            "type": {
                "name": "shape",
                "value": {
                    "duration": {
                        "name": "number",
                        "required": false
                    },
                    "easing": {
                        "name": "string",
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
            },
            "required": false,
            "description": ""
        },
        "style": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": ""
        },
        "tabular": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "text": {
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