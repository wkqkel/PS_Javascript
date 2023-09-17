/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    // a 아스키코드 97
    //  97 + 1 b 짝수일때 b
    // 98 + 1 w 
    const arr = coordinates.split('')
    const aski = arr[0].charCodeAt();
    return (aski + +arr[1]) % 2 !== 0
};