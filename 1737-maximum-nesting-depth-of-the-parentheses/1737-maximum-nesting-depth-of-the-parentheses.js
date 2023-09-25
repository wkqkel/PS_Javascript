/**
 * @param {string} s
 * @return {number}
 */
const cal = ['+', '-', '*', '/'];
var maxDepth = function (s) {
    let max = 0
    let stack = [];
    for (let x of s) {
        if (x === '(') {
            stack.push(x)
        }
        if (stack.length && x === ')') {
            max = Math.max(max, stack.length)
            stack.pop()
        }
    }
    return max
};