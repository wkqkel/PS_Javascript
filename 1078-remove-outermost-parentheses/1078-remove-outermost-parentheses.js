/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [''];
    let left = right = 0;

    for(let x of s) {
        x === '(' ? left++ : right++
        stack[stack.length -1] +=  x;
        if(left === right && x === ')') {
            const removed = [...stack[stack.length -1]].slice(1, -1).join('');
            stack[stack.length -1] = removed;
            stack.push('')
        }
    }
    return stack.join('')
};