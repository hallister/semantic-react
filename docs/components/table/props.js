/* eslint-disable */
exports.table = {
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
                        "value": "'bottom'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "basic": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'very'",
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
        "celled": {
            "type": {
                "name": "bool"
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
        "collapsing": {
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
        "columns": {
            "type": {
                "name": "number"
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
                "value": "'table'",
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
        "definition": {
            "type": {
                "name": "bool"
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
        "inverted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "padded": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'very'",
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
        "selectable": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "singleLine": {
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
        "stackable": {
            "type": {
                "name": "shape",
                "value": {
                    "computer": {
                        "name": "bool",
                        "required": false
                    },
                    "mobile": {
                        "name": "bool",
                        "required": false
                    },
                    "tablet": {
                        "name": "bool",
                        "required": false
                    }
                }
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    computer: false,\r\n    mobile: false,\r\n    tablet: false\r\n}",
                "computed": false
            }
        },
        "striped": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "structured": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "unstackable": {
            "type": {
                "name": "shape",
                "value": {
                    "computer": {
                        "name": "bool",
                        "required": false
                    },
                    "mobile": {
                        "name": "bool",
                        "required": false
                    },
                    "tablet": {
                        "name": "bool",
                        "required": false
                    }
                }
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    computer: false,\r\n    mobile: false,\r\n    tablet: false\r\n}",
                "computed": false
            }
        },
        "valigned": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'center'",
                        "computed": false
                    },
                    {
                        "value": "'right'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "width": {
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
exports.td = {
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
                    },
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
        "className": {
            "type": {
                "name": "any"
            },
            "required": false,
            "description": ""
        },
        "collapsing": {
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
                "value": "'td'",
                "computed": false
            }
        },
        "singleLine": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "type": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'negative'",
                        "computed": false
                    },
                    {
                        "value": "'positive'",
                        "computed": false
                    },
                    {
                        "value": "'warning'",
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
/* eslint-disable */
exports.tr = {
    "description": "",
    "props": {
        "children": {
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
                "value": "'tr'",
                "computed": false
            }
        }
    }
}
/* eslint-enable */