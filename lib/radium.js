'use strict';

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _elements = require('./elements');

var elements = _interopRequireWildcard(_elements);

var _modules = require('./modules');

var modules = _interopRequireWildcard(_modules);

var _views = require('./views');

var views = _interopRequireWildcard(_views);

var _collections = require('./collections');

var collections = _interopRequireWildcard(_collections);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exportWithRadium(components) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(components)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            if (typeof components[name] === "function") {
                module.exports[name] = (0, _radium2.default)(components[name]);
            } else {
                module.exports[name] = components[name];
            }
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
} /**
   * Radium enhanced semantic UI elements
   */
/* eslint-disable */


exportWithRadium(elements);
exportWithRadium(modules);
exportWithRadium(views);
exportWithRadium(collections);

/* eslint-enable */
//# sourceMappingURL=radium.js.map