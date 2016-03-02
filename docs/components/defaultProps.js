/* eslint-disable */
exports.defaultProps = {
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
    },
}
/* eslint-enable */

