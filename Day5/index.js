// Copyright (c) 2023 by Shakhbozbek Usmonov Miracle Programmer.
// leetcode.com 30 Days of JavaScript challenge

// ----- Started -----

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// --------------------------------

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Store counters for the biggest string, the start of the window, and the current letter's position (end of window)
    let longestStringLength = 0,
        startOfWindow = 0,
        currentPosition = 0;

    // Initialise a Set to store the characters
    let characterSet = new Set();

    // Loop through the provided string
    while (currentPosition < s.length) {
        // Check if the current character exists in the Set
        if (characterSet.has(s[currentPosition])) {
            // If so, delete it from the Set (as it will be picked up on the next run), and move the window's start forwards
            characterSet.delete(s[startOfWindow++]);
        } else {
            // If not, add the current character to the Set, and move the current character forwards
            characterSet.add(s[currentPosition++]);
            longestStringLength = Math.max(
                longestStringLength,
                characterSet.size
            );
        }
    }

    return longestStringLength;
};

// -----------------------------------------------------

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    let timerID = setTimeout(() => {
        fn(...args);
    }, t);
    return function () {
        clearTimeout(timerID);
    };
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// ----------------- END -----------------------
