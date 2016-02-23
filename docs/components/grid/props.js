/* eslint-disable */
exports.column = {
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
                        "value": "'justified'",
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
        "style": {
            "type": {
                "name": "any"
            },
            "required": false,
            "description": ""
        },
        "valigned": {
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
        "visible": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'large screen'",
                        "computed": false
                    },
                    {
                        "value": "'wide screen'",
                        "computed": false
                    },
                    {
                        "value": "'computer'",
                        "computed": false
                    },
                    {
                        "value": "'mobile'",
                        "computed": false
                    },
                    {
                        "value": "'tablet'",
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
exports.computer = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.device = {
    "description": "",
    "props": {
        "callback": {
            "type": {
                "name": "func"
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
        "only": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "reversed": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
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
        "type": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'mobile'",
                        "computed": false
                    },
                    {
                        "value": "'computer'",
                        "computed": false
                    },
                    {
                        "value": "'tablet'",
                        "computed": false
                    }
                ]
            },
            "required": true,
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
exports.grid = {
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
                        "value": "'justified'",
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
        "celled": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'internally'",
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
                "name": "any"
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
        "divided": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'vertically'",
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
        "doubling": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "equal": {
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
                                "value": "'horizontally'",
                                "computed": false
                            },
                            {
                                "value": "'vertically'",
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
        "relaxed": {
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
        "stackable": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "valigned": {
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
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.mobile = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.row = {
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
                        "value": "'justified'",
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
        "equal": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "stretched": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "valigned": {
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
        "visible": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'large screen'",
                        "computed": false
                    },
                    {
                        "value": "'wide screen'",
                        "computed": false
                    },
                    {
                        "value": "'computer'",
                        "computed": false
                    },
                    {
                        "value": "'mobile'",
                        "computed": false
                    },
                    {
                        "value": "'tablet'",
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
exports.tablet = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */