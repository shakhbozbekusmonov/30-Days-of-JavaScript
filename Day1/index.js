// Copyright (c) 2023 by Shakhbozbek Usmonov Miracle Programmer.
// leetcode.com 30 Days of JavaScript challenge

// ----- Started -----
/**
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    };
};

// --------------------------------

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };
};

// --------------------------------

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (otherVal) => {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: (otherVal) => {
            if (val === otherVal) {
                throw new Error("Equal");
            } else {
                return true;
            }
        },
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

//-------------------------------------------------

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    var count = init;
    return {
        increment: () => {
            return ++count;
        },
        decrement: () => {
            return --count;
        },
        reset: () => {
            count = init;
            return count;
        },
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
