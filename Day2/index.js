// Copyright (c) 2023 by Shakhbozbek Usmonov Miracle Programmer.
// leetcode.com 30 Days of JavaScript challenge

// ----- Started -----
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
};

// --------------------------------

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var _array = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) _array.push(arr[i]);
    }
    return _array;
};

// --------------------------------

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    var acc = init;
    for (var i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
};

// --------- End ---------
