'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is a minimalist implementation of Zepto. We are only using $ functions
// that are neccesary to implement Semantic UI. None of these functions allow
// for SETTING properties.

var rQuery = function () {
    var rquery = {},
        $ = void 0,
        emptyArray = [],
        uniq = void 0,
        filter = emptyArray.filter,
        camelize = void 0,
        class2type = {},
        rootNodeRE = /^(?:body|html)$/i;

    camelize = function camelize(str) {
        return str.replace(/-+(.)?/g, function (match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
    };

    function isWindow(obj) {
        return obj != null && obj == obj.window;
    }

    function isDocument(obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }

    function likeArray(obj) {
        return typeof obj.length == 'number';
    }

    function flatten(array) {
        return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }

    rquery.R = function (dom, selector) {
        dom = dom || [];
        dom.__proto__ = $.fn;
        dom.selector = selector || '';
        return dom;
    };

    rquery.init = function (selector) {
        var dom = void 0;

        if (!selector) {
            return rquery.R();
        } else if (Array.isArray(selector)) {
            dom = selector, selector = null;
        } else if (selector.nodeType || isWindow(selector)) {
            // selector is a dom node
            dom = [selector], selector = null;
        } else {
            // selector is a class instance, so find the dom Node
            selector = _reactDom2.default.findDOMNode(selector);
            dom = [selector], selector = null;
        }

        return rquery.R(dom, selector);
    };

    uniq = function uniq(array) {
        return filter.call(array, function (item, idx) {
            return array.indexOf(item) == idx;
        });
    };

    $ = function $(selector) {
        return rquery.init(selector);
    };

    $.inArray = function (elem, array, i) {
        return emptyArray.indexOf.call(array, elem, i);
    };

    $.map = function (elements, callback) {
        var value = void 0,
            values = [],
            i = void 0,
            key = void 0;
        if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
            value = callback(elements[i], i);
            if (value != null) values.push(value);
        } else for (key in elements) {
            value = callback(elements[key], key);
            if (value != null) values.push(value);
        }
        return flatten(values);
    };

    $.each = function (elements, callback) {
        var i = void 0,
            key = void 0;
        if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++) {
                if (callback.call(elements[i], i, elements[i]) === false) return elements;
            }
        } else {
            for (key in elements) {
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }

        return elements;
    };

    // Populate the class2type map
    $.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
        class2type['[object ' + name + ']'] = name.toLowerCase();
    });

    $.fn = {
        forEach: emptyArray.forEach,
        reduce: emptyArray.reduce,
        push: emptyArray.push,
        sort: emptyArray.sort,
        indexOf: emptyArray.indexOf,
        concat: emptyArray.concat,
        css: function css(property) {
            var computedStyle = void 0,
                element = this[0];

            if (!element) return;
            computedStyle = getComputedStyle(element, '');

            return element.style[camelize(property)] || computedStyle.getPropertyValue(property);
        },
        map: function map(fn) {
            return $($.map(this, function (el, i) {
                return fn.call(el, i, el);
            }));
        },
        offset: function offset() {
            if (!this.length) return null;
            var obj = this[0].getBoundingClientRect();
            return {
                left: obj.left + window.pageXOffset,
                top: obj.top + window.pageYOffset,
                width: Math.round(obj.width),
                height: Math.round(obj.height)
            };
        },
        offsetParent: function offsetParent() {
            return this.map(function () {
                var parent = this.offsetParent || document.body;
                while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css('position') == 'static') {
                    parent = parent.offsetParent;
                }return parent;
            });
        },
        parent: function parent() {
            return uniq(this.pluck('parentNode'));
        },
        pluck: function pluck(property) {
            return $.map(this, function (el) {
                return el[property];
            });
        },
        position: function position() {
            if (!this.length) return;

            var elem = this[0],

            // Get *real* offsetParent
            offsetParent = this.offsetParent(),

            // Get correct offsets
            offset = this.offset(),
                parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

            // Subtract element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            offset.top -= parseFloat($(elem).css('margin-top')) || 0;
            offset.left -= parseFloat($(elem).css('margin-left')) || 0;

            // Add offsetParent borders
            parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
            parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

            // Subtract the two offsets
            return {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left
            };
        },
        scrollTop: function scrollTop() {
            if (!this.length) return;
            var hasScrollTop = 'scrollTop' in this[0];
            return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
        },
        scrollLeft: function scrollLeft() {
            if (!this.length) return;
            var hasScrollLeft = 'scrollLeft' in this[0];
            return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
        }
    };

    ['width', 'height'].forEach(function (dimension) {
        var dimensionProperty = dimension.replace(/./, function (m) {
            return m[0].toUpperCase();
        });

        // adapted from https://gist.github.com/wheresrhys/5823198

        $.fn[dimension] = function () {
            var offset = void 0,
                el = this[0];

            if (isWindow(el)) {
                return el['inner' + dimensionProperty];
            } else if (isDocument(el)) {
                return el.documentElement['scroll' + dimensionProperty];
            } else {
                return (offset = this.offset()) && offset[dimension];
            }
        };
    });

    rquery.R.prototype = $.fn;

    $.rquery = rquery;

    return $;
}();

exports.$ = rQuery;
//# sourceMappingURL=rquery.js.map