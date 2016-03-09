'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // DFS for recursive seaarching of a specific child component


exports.arrayToObject = arrayToObject;
exports.countChildren = countChildren;
exports.hasChild = hasChild;
exports.hasDescendant = hasDescendant;
exports.hasFirstChild = hasFirstChild;
exports.getChild = getChild;
exports.validateClassProps = validateClassProps;
exports.spliceChildren = spliceChildren;
exports.isEveryChild = isEveryChild;
exports.isNodeInRoot = isNodeInRoot;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];

exports.Social = ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube'];

exports.Colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

exports.Sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];

function arrayToObject(array) {
    var value = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    var returnObject = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var v = _step.value;

            returnObject[v] = value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return returnObject;
}

function countChildren(children, component) {
    var count = 0;

    _react2.default.Children.forEach(children, function (child) {
        if (child.type === component) {
            count++;
        }
    });

    return count;
}

function hasChild(children, component) {
    children = _react2.default.Children.toArray(children);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            if (child.type && child.type == component) {
                return true;
            } else if (component === (typeof child === 'undefined' ? 'undefined' : _typeof(child))) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return false;
}

function hasDescendant(children, component) {
    children = _react2.default.Children.toArray(children);

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var child = _step3.value;

            if (child.type && child.type == component) {
                return true;
            } else if (_react2.default.Children.count(child.props.children) > 0) {
                return hasDescendant(child.props.children, component);
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return false;
}

function hasFirstChild(children, component) {
    if (typeof children === 'string') {
        return false;
    }

    if (_react2.default.Children.count(children) === 1) {
        return _react2.default.Children.only(children).type === component;
    } else {
        return children[0].type === component;
    }
}

function getChild(children, component) {
    var equal = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    return _react2.default.Children.map(children, function (child) {
        if (child.type !== component && equal) {
            return child;
        } else if (child.type == component && !equal) {
            return child;
        } else {
            return null;
        }
    }.bind(this));
}

function validateClassProps(classes, props, validator, sub) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = Object.keys(validator)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var propName = _step4.value;

            if (!!props[propName] === true) {
                var realProp = propName;

                if (sub && sub[propName]) {
                    realProp = sub[propName];
                }

                classes[propName] = false;

                if (typeof props[propName] === 'string') {
                    classes[props[propName] + ' ' + realProp] = true;
                } else {
                    classes[propName] = true;
                }
            }
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    return classes;
}

function spliceChildren(children, component) {
    var splicedComponent = void 0,
        componentIndex = void 0;
    children = _react2.default.Children.toArray(children);

    children.forEach(function (child, index) {
        if (child.type && child.type == component) {
            splicedComponent = children.splice(index, 1);
            componentIndex = index;
        }
    });

    return {
        component: splicedComponent,
        remaining: children,
        index: componentIndex
    };
}

function isEveryChild(children, component) {
    children = _react2.default.Children.toArray(children);

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var child = _step5.value;

            if (!child.type || child.type !== component) {
                return false;
            }
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    return true;
}

function isNodeInRoot(node, root) {
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
//# sourceMappingURL=utilities.js.map