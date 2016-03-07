/* eslint-disable */
exports.dimmable = {
    "description": "Defines dimmable section",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "Children nodes"
        },
        "component": {
            "type": {
                "name": "custom",
                "raw": "elementType"
            },
            "required": false,
            "description": "Use other component for composing results\r\n@example\r\n<Grid component={Container}>...</Grid>",
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
            "description": "Apply default semantic UI classes for component, for example ui button",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "className": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Additional CSS ui classes"
        },
        "blurring": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Blur dimmer",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "dimmed": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Add dimmed class to dimmable. This could be omitted and you can instead set overflow: hidden instead",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        }
    },
    "composes": [
        "../../defaultProps"
    ]
}
/* eslint-enable */
/* eslint-disable */
exports.dimmer = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": "Children nodes"
        },
        "component": {
            "type": {
                "name": "custom",
                "raw": "elementType"
            },
            "required": false,
            "description": "Use other component for composing results\r\n@example\r\n<Grid component={Container}>...</Grid>",
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
            "description": "Apply default semantic UI classes for component, for example ui button",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "className": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "Additional CSS ui classes"
        },
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Hide/Display dimmer",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "enterAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "Enter animation",
            "defaultValue": {
                "value": "{\r\n    opacity: 1\r\n}",
                "computed": false
            }
        },
        "leaveAnimation": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": "Leave animation",
            "defaultValue": {
                "value": "{\r\n    opacity: 0\r\n}",
                "computed": false
            }
        },
        "page": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Page dimmer. Doesn't require dimmable section",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "inverted": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Inverted dimmer",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        }
    },
    "composes": [
        "../../defaultProps"
    ]
}
/* eslint-enable */