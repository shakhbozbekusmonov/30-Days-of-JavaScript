// Copyright (c) 2023 by Shakhbozbek Usmonov Miracle Programmer.
// leetcode.com 30 Days of JavaScript challenge

// ----- Started -----

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    var _promise1 = await promise1;
    var _promise2 = await promise2;
    return _promise1 + _promise2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// --------------------------------

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, millis);
    });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// ---------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var _sum1 = "";
    var _sum2 = "";
    var _result = 0;
    if (Array.isArray(l1) && Array.isArray(l2)) {
        _sum1 = l1.join("");
        _sum2 = l2.join("");
        _result = Number(_sum1) + Number(_sum2);
        String(_result);
        // _result.split("");
    }
    return _result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// -------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let node = null;
    const carry = arguments[2];
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const next1 = l1 ? l1.next : null;
        const next2 = l2 ? l2.next : null;
        const val = carry ? val1 + val2 + 1 : val1 + val2;
        node = new ListNode(val % 10);
        node.next = addTwoNumbers(next1, next2, val >= 10);
    } else if (carry) {
        node = new ListNode(1);
        node.next = null;
    }
    return node;
};

// ---------------- End ---------------
