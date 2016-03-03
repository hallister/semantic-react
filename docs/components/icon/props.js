/* eslint-disable */
exports.icon = {
    "description": "",
    "props": {
        "bordered": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "circular": {
            "type": {
                "name": "bool"
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
                "value": "'i'",
                "computed": false
            }
        },
        "corner": {
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
        "fitted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "flipped": {
            "type": {
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
        "left": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Left variation of the icon (if any)"
        },
        "link": {
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
        "name": {
            "type": {
                "name": "string"
            },
            "required": true,
            "description": ""
        },
        "onClick": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": ""
        },
        "right": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Right variation of the icon (if any)"
        },
        "rotated": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'clockwise'",
                        "computed": false
                    },
                    {
                        "value": "'counterclockwise'",
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
/* eslint-disable */
exports.icons = {
    "description": "",
    "props": {
        "bordered": {
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
                        "name": "instanceOf",
                        "value": "Icon"
                    },
                    {
                        "name": "arrayOf",
                        "value": {
                            "name": "instanceOf",
                            "value": "Icon"
                        }
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "circular": {
            "type": {
                "name": "bool"
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
                "value": "'i'",
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
        "fitted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "flipped": {
            "type": {
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
        "loading": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "rotated": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'clockwise'",
                        "computed": false
                    },
                    {
                        "value": "'counterclockwise'",
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
