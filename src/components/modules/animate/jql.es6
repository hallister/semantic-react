/*
    This is a tiny version of the VelocityJS implementation of jQuery's
    position(), offset() and an implementation of Velocitys getPropertyValue()
    this is used in modules that require a component to slide to an auto height.
*/

export class JQL {
    constructor(component) {
        if (component.nodeType) {
            this[0] = component;

            return this;
        } else {
            throw new Error('Not a DOM node');
        }
    }

    offset() {
        let box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };

        return {
            top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),
            left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)
        };
    }

    position() {
        /* jQuery */
        function offsetParent() {
            let offsetP = this.offsetParent || document;

            while (offsetP && (!offsetP.nodeType.toLowerCase === 'html' && offsetP.style.position === 'static')) {
                offsetP = offsetP.offsetParent;
            }

            return offsetP || document;
        }

        /* Zepto */
        let elem = this[0],
            jql = new JQL(),
            offParent = offsetParent.apply(elem),
            offset = this.offset(),
            parentOffset = /^(?:body|html)$/i.test(offParent.nodeName) ? { top: 0, left: 0 } : jql(offParent).offset()

        offset.top -= parseFloat(elem.style.marginTop) || 0;
        offset.left -= parseFloat(elem.style.marginLeft) || 0;

        if (offParent.style) {
            parentOffset.top += parseFloat(offParent.style.borderTopWidth) || 0
            parentOffset.left += parseFloat(offParent.style.borderLeftWidth) || 0
        }

        return {
            top: offset.top - parentOffset.top,
            left: offset.left - parentOffset.left
        };
    }

    property(property) {
        let computedStyle = window.getComputedStyle(this[0], null);

        // height property is offsetHeight - the padding and border
        if (property == 'height' && this.property('boxSizing').toString().toLowerCase() !== 'border-box') {
            return parseFloat(this[0].offsetHeight -
                   (parseFloat(this.property('borderBottomWidth')) || 0) -
                   (parseFloat(this.property('paddingTop')) || 0) -
                   (parseFloat(this.property('paddingBottom')) || 0));
        }

        if (property == 'outerHeight') {
            return parseFloat(this.property('height') +
                (parseFloat(this.property('borderTopWidth')) || 0) +
                (parseFloat(this.property('borderBottomWidth')) || 0) +
                (parseFloat(this.property('paddingTop')) || 0) +
                (parseFloat(this.property('paddingBottom')) || 0));
        }

        // this doesn't work for the filter prop in IE, but we shouldn't ever use that
        let computedValue = computedStyle[property];

        // fallback to style
        if (computedValue === '' || computedValue === null) {
            computedValue = this[0].style[property];
        }

        // fixing auto return values
        // is this ever useful?
        if (computedValue === 'auto' && /^(top|right|bottom|left)$/i.test(property)) {
            let position = this.property('position');

            if (position === 'fixed' || (position === 'absolute' && /top|left/i.test(property))) {
                /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
                computedValue = this.position(property); /* GET */
            }
        }

        return  computedValue;
    }
}
