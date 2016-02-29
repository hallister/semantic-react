/* eslint-disable */
exports.item = {
    "description": "Item is collection of elements. It could be menu/dropdown item or part ofr <Items /> collection",
    "props": {
        "link": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "Make item clickable"
        },
        "onClick": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "Item click handler"
        }
    },
    "composes": [
        "../../defaultProps"
    ]
}
/* eslint-enable */
/* eslint-disable */
exports.items = {
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
        "divided": {
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
        "relaxed": {
            "type": {
                "name": "custom",
                "raw": "React.PropTypes.relaxed"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */