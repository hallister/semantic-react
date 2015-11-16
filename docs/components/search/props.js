/* eslint-disable */
exports.results = {
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
        "emptyHeader": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'No Results'",
                "computed": false
            }
        },
        "emptyMessage": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'Your search returned no results'",
                "computed": false
            }
        },
        "onSearchClick": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": ""
        },
        "results": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "array"
                    },
                    {
                        "name": "object"
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "search": {
            "type": {
                "name": "string"
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
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.search = {
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
        "emptyHeader": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "emptyMessage": {
            "type": {
                "name": "string"
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
                "value": "{\r\n    duration: 200,\r\n    easing: 'out-expo',\r\n    from: {\r\n        opacity: 0,\r\n        transform: 'scale(0,0)',\r\n        WebkitTransform: 'scale(0,0)'\r\n    },\r\n    to: {\r\n        opacity: 1,\r\n        transform: 'scale(1,1)',\r\n        WebkitTransform: 'scale(1,1)'\r\n    }\r\n}",
                "computed": false
            }
        },
        "icon": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "string"
                    },
                    {
                        "name": "bool"
                    }
                ]
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
                "value": "{\r\n    duration: 200,\r\n    easing: 'out-expo',\r\n    from: {\r\n        opacity: 1,\r\n        transform: 'scale(1,1)',\r\n        WebkitTransform: 'scale(1,1)'\r\n    },\r\n    to: {\r\n        opacity: 0,\r\n        transform: 'scale(0,0)',\r\n        WebkitTransform: 'scale(0,0)'\r\n    }\r\n}",
                "computed": false
            }
        },
        "loading": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "onChange": {
            "type": {
                "name": "func"
            },
            "required": true,
            "description": ""
        },
        "onSearchClick": {
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
        "placeholder": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'Search...'",
                "computed": false
            }
        },
        "results": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "array"
                    },
                    {
                        "name": "object"
                    }
                ]
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */