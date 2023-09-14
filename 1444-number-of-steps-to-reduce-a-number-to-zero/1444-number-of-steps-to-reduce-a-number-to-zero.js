/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    if (num === 0) return 0;
    return 1 + numberOfSteps(num % 2 === 0 ? num / 2 : num - 1)
};