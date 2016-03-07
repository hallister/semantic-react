"use strict";

/*eslint-disable */
/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License:
 http://en.wikipedia.org/wiki/MIT_License */
exports.bezier = function (mX1, mY1, mX2, mY2) {
    var NEWTON_ITERATIONS = 4,
        NEWTON_MIN_SLOPE = 0.001,
        SUBDIVISION_PRECISION = 0.0000001,
        SUBDIVISION_MAX_ITERATIONS = 10,
        kSplineTableSize = 11,
        kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
        float32ArraySupported = "Float32Array" in window;

    /* Must contain four arguments. */
    if (arguments.length !== 4) {
        return false;
    }

    /* Arguments must be numbers. */
    for (var i = 0; i < 4; ++i) {
        if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
            return false;
        }
    }

    /* X values must be in the [0, 1] range. */
    mX1 = Math.min(mX1, 1);
    mX2 = Math.min(mX2, 1);
    mX1 = Math.max(mX1, 0);
    mX2 = Math.max(mX2, 0);

    var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

    function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
    }
    function C(aA1) {
        return 3.0 * aA1;
    }

    function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }

    function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function newtonRaphsonIterate(aX, aGuessT) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);

            if (currentSlope === 0.0) return aGuessT;

            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }

        return aGuessT;
    }

    function calcSampleValues() {
        for (var i = 0; i < kSplineTableSize; ++i) {
            mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
    }

    function binarySubdivide(aX, aA, aB) {
        var currentX,
            currentT,
            i = 0;

        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

        return currentT;
    }

    function getTForX(aX) {
        var intervalStart = 0.0,
            currentSample = 1,
            lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }

        --currentSample;

        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
            guessForT = intervalStart + dist * kSampleStepSize,
            initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
        }
    }

    var _precomputed = false;

    function precompute() {
        _precomputed = true;
        if (mX1 !== mY1 || mX2 !== mY2) calcSampleValues();
    }

    var f = function f(aX) {
        if (!_precomputed) precompute();
        if (mX1 === mY1 && mX2 === mY2) return aX;
        if (aX === 0) return 0;
        if (aX === 1) return 1;

        return calcBezier(getTForX(aX), mY1, mY2);
    };

    f.getControlPoints = function () {
        return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }];
    };

    var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
    f.toString = function () {
        return str;
    };

    return f;
};

/* Runge-Kutta spring physics function generator. Adapted from Framer.js,
 copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run
 without a defined duration in order to calculate the full path. A second pass
 then adjusts the time delta -- using the relation between actual time and
 duration -- to calculate the path for the duration-constrained animation. */
exports.spring = function () {
    function springAccelerationForState(state) {
        return -state.tension * state.x - state.friction * state.v;
    }

    function springEvaluateStateWithDerivative(initialState, dt, derivative) {
        var state = {
            x: initialState.x + derivative.dx * dt,
            v: initialState.v + derivative.dv * dt,
            tension: initialState.tension,
            friction: initialState.friction
        };

        return { dx: state.v, dv: springAccelerationForState(state) };
    }

    function springIntegrateState(state, dt) {
        var a = {
            dx: state.v,
            dv: springAccelerationForState(state)
        },
            b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
            c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
            d = springEvaluateStateWithDerivative(state, dt, c),
            dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
            dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

        state.x = state.x + dxdt * dt;
        state.v = state.v + dvdt * dt;

        return state;
    }

    return function springRK4Factory(tension, friction, duration) {

        var initState = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
        },
            path = [0],
            time_lapsed = 0,
            tolerance = 1 / 10000,
            DT = 16 / 1000,
            have_duration,
            dt,
            last_state;

        tension = parseFloat(tension) || 500;
        friction = parseFloat(friction) || 20;
        duration = duration || null;

        initState.tension = tension;
        initState.friction = friction;

        have_duration = duration !== null;

        /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
        if (have_duration) {
            /* Run the simulation without a duration. */
            time_lapsed = springRK4Factory(tension, friction);
            /* Compute the adjusted time delta. */
            dt = time_lapsed / duration * DT;
        } else {
            dt = DT;
        }

        while (true) {
            /* Next/step function .*/
            last_state = springIntegrateState(last_state || initState, dt);
            /* Store the position. */
            path.push(1 + last_state.x);
            time_lapsed += 16;
            /* If the change threshold is reached, break. */
            if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
                break;
            }
        }

        /* If duration is not defined, return the actual time required for
         completing this animation. Otherwise, return a closure that holds
         the computed path and returns a snapshot of the position according to
         a given percentComplete. */
        return !have_duration ? time_lapsed : function (percentComplete) {
            return path[percentComplete * (path.length - 1) | 0];
        };
    };
}();
/*eslint-enable */
//# sourceMappingURL=curves.js.map