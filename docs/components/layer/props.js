/* eslint-disable */
exports.rendertolayer = {
    "description": "Render child elements to separate <div> tag append to body\r\nInspired by: https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx\r\nAnd: https://github.com/callemall/material-ui/blob/master/src/render-to-layer.jsx\r\nPretty much copying everything from second link",
    "props": {
        "componentClickAway": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "Callback function when clicked outside of rendered component."
        },
        "open": {
            "type": {
                "name": "bool"
            },
            "required": true,
            "description": "Controls the visibility of layer"
        },
        "render": {
            "type": {
                "name": "func"
            },
            "required": true,
            "description": "Render function for component"
        },
        "useLayerForClickAway": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "If true it will prevents clicking of under-layered components",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "zIndex": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "Layer zIndex",
            "defaultValue": {
                "value": "2000",
                "computed": false
            }
        }
    }
}
/* eslint-enable */