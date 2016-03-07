'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* Velocity.js */
exports.default = {
    ease: [0.25, 0.1, 0.25, 1.0],
    'in-ease': [0.42, 0.0, 1.00, 1.0],
    'out-ease': [0.00, 0.0, 0.58, 1.0],
    'in-out-ease': [0.42, 0.0, 0.58, 1.0],
    'in-sine': [0.47, 0, 0.745, 0.715],
    'out-sine': [0.39, 0.575, 0.565, 1],
    'in-out-sine': [0.445, 0.05, 0.55, 0.95],
    'in-quad': [0.55, 0.085, 0.68, 0.53],
    'out-quad': [0.25, 0.46, 0.45, 0.94],
    'in-out-quad': [0.455, 0.03, 0.515, 0.955],
    'in-cubic': [0.55, 0.055, 0.675, 0.19],
    'out-cubic': [0.215, 0.61, 0.355, 1],
    'in-out-cubic': [0.645, 0.045, 0.355, 1],
    'in-quart': [0.895, 0.03, 0.685, 0.22],
    'out-quart': [0.165, 0.84, 0.44, 1],
    'in-out-quart': [0.77, 0, 0.175, 1],
    'in-quint': [0.755, 0.05, 0.855, 0.06],
    'out-quint': [0.23, 1, 0.32, 1],
    'in-out-quint': [0.86, 0, 0.07, 1],
    'in-expo': [0.95, 0.05, 0.795, 0.035],
    'out-expo': [0.19, 1, 0.22, 1],
    'in-out-expo': [1, 0, 0, 1],
    'in-circ': [0.6, 0.04, 0.98, 0.335],
    'out-circ': [0.075, 0.82, 0.165, 1],
    'in-out-circ': [0.785, 0.135, 0.15, 0.86],
    'ios-scroll': [0.17, 0.37, 0.39, 0.99],
    linear: function linear(factor) {
        return factor;
    },
    swing: function swing(factor) {
        return 0.5 - Math.cos(factor * Math.PI) / 2;
    },
    spring: function spring(factor) {
        return 1 - Math.cos(factor * 4.5 * Math.PI) * Math.exp(-factor * 6);
    }
};
//# sourceMappingURL=easings.js.map