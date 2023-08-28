// Copyright (c) 2023 by Shakhbozbek Usmonov Miracle Programmer.
// leetcode.com 30 Days of JavaScript challenge

// ----- Started -----

var MyStack = function () {
    this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.arr.push(x);
    for (let i = 0; i < this.arr.length - 1; i++) {
        this.arr.push(this.arr.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.arr.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.arr[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.arr.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

//----------------------------------------------------------------
