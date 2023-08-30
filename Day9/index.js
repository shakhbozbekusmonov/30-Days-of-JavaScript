// Copyright (c) 2023 by Shakhbozbek Usmonov Miracle Programmer.
// leetcode.com 30 Days of JavaScript challenge

// ----- Started -----

class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) throw new Error("Division by zero is not allowed");
        this.result /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

//----------------------------------------------------------------

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const stack = [...arr.map((item) => [item, n])];
    const result = [];

    while (stack.length > 0) {
        const [item, n] = stack.pop();

        if (Array.isArray(item) && n > 0) {
            stack.push(...item.map((subItem) => [subItem, n - 1]));
        } else {
            result.push(item);
        }
    }
    return result.reverse();
};

//----------------------------------------------------------------
