/* eslint-disable */
exports.segment = {
    "description": "",
    "props": {
        "aligned": {
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
                    },
                    {
                        "value": "'center'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": ""
        },
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
            "description": "",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "basic": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "blurring": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "children": {
            "type": {
                "name": "any"
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
        "color": {
            "type": {
                "name": "string"
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
        "container": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
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
        "emphasis": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'primary'",
                        "computed": false
                    },
                    {
                        "value": "'secondary'",
                        "computed": false
                    },
                    {
                        "value": "'tertiary'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": ""
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
        "index": {
            "type": {
                "name": "number"
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
        "loading": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "spacing": {
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
        },
        "style": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{}",
                "computed": false
            }
        },
        "type": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'raised'",
                        "computed": false
                    },
                    {
                        "value": "'stacked'",
                        "computed": false
                    },
                    {
                        "value": "'piled'",
                        "computed": false
                    }
                ]
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
        },
        "zIndex": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.segments = {
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
        "piled": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "raised": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "stacked": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */