/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let depth = 0;
    for (let x of logs) {
        if (x === '../') {
            depth = Math.max(depth - 1, 0)
        } else if (x === './') {
        } else {
            depth += 1;
        }
    }
    
    return depth
};