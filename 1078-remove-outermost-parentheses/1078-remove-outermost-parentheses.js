/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [''];
    let left = 0;
    let right = 0;
    for(let x of s) {
        if(x === ')') {
            right++
        }
        if(x === '(') {
            left++
        }
        stack[stack.length -1] +=  x
        if(left === right && x === ')') {
            stack[stack.length -1] = [...stack[stack.length -1]].slice(1, -1).join('');
            stack.push('')
        }
    
    }
    return stack.join('')
};