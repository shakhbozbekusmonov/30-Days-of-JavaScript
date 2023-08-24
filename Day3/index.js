// Copyright (c) 2023 by Shakhbozbek Usmonov Miracle Programmer.
// leetcode.com 30 Days of JavaScript challenge

// ----- Started -----

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        for (var i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// --------------------------------------------------------

/**
 * @return {number}
 */
var argumentsLength = function (...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// --------------------------------------------------------
