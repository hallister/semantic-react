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
            "description": "value - input"
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
                "name": "object"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    opacity: 1,\r\n    scale: 1\r\n}",
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
                "name": "object"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    opacity: 0,\r\n    scale: 0\r\n}",
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
        },
        "value": {
            "type": {
                "name": "string"
            },
            "defaultValue": {
                "value": "''",
                "computed": false
            },
            "required": false,
            "description": "value - input"
        }
    }
}
/* eslint-enable */
