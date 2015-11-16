/* eslint-disable */
exports.image = {
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
        "avatar": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "bordered": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "centered": {
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
            "description": ""
        },
        "content": {
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
        "fluid": {
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
        "isCommentsChild": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "shape": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'circular'",
                        "computed": false
                    },
                    {
                        "value": "'rounded'",
                        "computed": false
                    }
                ]
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
        "spaced": {
            "type": {
                "name": "union",
                "value": [
                    {
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
                    {
                        "name": "bool"
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "src": {
            "type": {
                "name": "string"
            },
            "required": true,
            "description": ""
        },
        "visible": {
            "type": {
                "name": "union",
                "computed": true,
                "value": "React.PropTypes.oneOf(['hidden', 'visible'])"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.images = {
    "description": "",
    "props": {
        "avatar": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "bordered": {
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
        "disabled": {
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
        "shape": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'circular'",
                        "computed": false
                    },
                    {
                        "value": "'rounded'",
                        "computed": false
                    }
                ]
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