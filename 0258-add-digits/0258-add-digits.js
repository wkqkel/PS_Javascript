/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    while(num >= 10) {
        const arr = [...String(num)];
        num = arr.reduce((a,b)=> a+ +b,0);
    }
    return num
};