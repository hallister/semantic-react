/* eslint-disable */
exports.modal = {
    "description": "",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
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
                        "name": "func"
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
        "disabled": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "enterAnimation": {
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
            "description": "",
            "defaultValue": {
                "value": "{\r\n    duration: 500,\r\n    easing: 'in-ease',\r\n    from: {\r\n        opacity: 0,\r\n        transform: 'scale(0,0)',\r\n        WebkitTransform: 'scale(0,0)'\r\n    },\r\n    to: {\r\n        opacity: 1,\r\n        transform: 'scale(1,1)',\r\n        WebkitTransform: 'scale(1,1)'\r\n    }\r\n}",
                "computed": false
            }
        },
        "fullscreen": {
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
        "leaveAnimation": {
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
            "description": "",
            "defaultValue": {
                "value": "{\r\n    duration: 500,\r\n    easing: 'in-ease',\r\n    from: {\r\n        opacity: 1,\r\n        transform: 'scale(1,1)',\r\n        WebkitTransform: 'scale(1,1)'\r\n    },\r\n    to: {\r\n        opacity: 0,\r\n        transform: 'scale(0,0)',\r\n        WebkitTransform: 'scale(0,0)'\r\n    }\r\n}",
                "computed": false
            }
        },
        "offset": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": ""
        },
        "onComplete": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "function noop() {}",
                "computed": false
            }
        },
        "outsideClickClose": {
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
        "padding": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": ""
        },
        "page": {
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
exports.modalbody = {
    "description": "",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "basic": {
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
                        "name": "func"
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
        "fullscreen": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "offset": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "0",
                "computed": false
            }
        },
        "padding": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "50",
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
            "description": "",
            "defaultValue": {
                "value": "{}",
                "computed": false
            }
        }
    }
}
/* eslint-enable */