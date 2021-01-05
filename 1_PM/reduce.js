const assert = require('assert');
const { callbackify } = require('util');

/**
 * Complete the implementation of sum and reduce such that reducing an array
 * returns the sum of its values. e.g. [0,4,3,6,9].reduce(sum, 0) === 22
 */

const sum = (acc, cur) => acc + cur

Array.prototype.reduce = function(fun, init) {
    
};

const arr1 = [0, 1, 2, 3, 4];
const arr2 = [3, -4, 134, 0.5, 7];

assert(arr1.reduce(sum, 0) === 10);
assert(arr2.reduce(sum, 0) === 140.5);
