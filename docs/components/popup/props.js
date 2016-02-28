/* eslint-disable */
exports.popup = {
    "description": "Popup with animations",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "True to display the popup. If false will be hidden",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "autoPosition": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Auto position popup when needed",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "distanceAway": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "Offset for distance of popup from element",
            "defaultValue": {
                "value": "0",
                "computed": false
            }
        },
        "endAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "End animation",
            "defaultValue": {
                "value": "{\r\n    scale: 0\r\n}",
                "computed": false
            }
        },
        "lastResortPosition": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Use this position when element fails to fit on screen in all tried positions\r\nIf omitted, the last tried position will be used instead"
        },
        "offset": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "Offset in pixels from calculated position",
            "defaultValue": {
                "value": "0",
                "computed": false
            }
        },
        "onRequestClose": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "Callback when popup wants to be closed (i.e. when offscreen or clicked outside)",
            "defaultValue": {
                "value": "() => {}",
                "computed": false
            }
        },
        "prefer": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'adjacent'",
                        "computed": false
                    },
                    {
                        "value": "'opposite'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "When auto-positioning popup use opposite direction or adjacent as next position",
            "defaultValue": {
                "value": "'adjacent'",
                "computed": false
            }
        },
        "preventElementClicks": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "If true will prevent clicking on the other elements",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "requestCloseWhenOffScreen": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Hide popup when target element scrolls off the screen",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "startAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "Start animation",
            "defaultValue": {
                "value": "{\r\n    scale: 1\r\n}",
                "computed": false
            }
        },
        "target": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "Target element to apply popup"
        }
    },
    "composes": [
        "./popupelement"
    ]
}
/* eslint-enable */
/* eslint-disable */
exports.popupelement = {
    "description": "Popup component without animation transitions",
    "props": {
        "basic": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Basic popup variation"
        },
        "fluid": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Fluid popup"
        },
        "flowing": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "No maximum width and continue to flow to fit its content"
        },
        "inverted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Inverted popup"
        },
        "size": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'mini'",
                        "computed": false
                    },
                    {
                        "value": "'tiny'",
                        "computed": false
                    },
                    {
                        "value": "'small'",
                        "computed": false
                    },
                    {
                        "value": "'large'",
                        "computed": false
                    },
                    {
                        "value": "'huge'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "Popup size"
        },
        "wide": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "bool"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": "Make content of popup wide"
        },
        "position": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'top left'",
                        "computed": false
                    },
                    {
                        "value": "'top center'",
                        "computed": false
                    },
                    {
                        "value": "'top right'",
                        "computed": false
                    },
                    {
                        "value": "'right center'",
                        "computed": false
                    },
                    {
                        "value": "'bottom right'",
                        "computed": false
                    },
                    {
                        "value": "'bottom center'",
                        "computed": false
                    },
                    {
                        "value": "'bottom left'",
                        "computed": false
                    },
                    {
                        "value": "'left center'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "Popup position",
            "defaultValue": {
                "value": "'top left'",
                "computed": false
            }
        }
    },
    "composes": [
        "../../defaultProps"
    ]
}
/* eslint-enable */