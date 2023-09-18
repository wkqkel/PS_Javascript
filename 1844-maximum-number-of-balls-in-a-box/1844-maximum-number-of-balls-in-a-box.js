/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const boxes = {};
    for(let i=lowLimit; i<=highLimit; i++) {
        const boxNumber = [...String(i)].reduce((a,b)=>a + +b,0);
        boxes[boxNumber] =  (boxes[boxNumber] || 0) + 1;
    }
    return Math.max(...Object.values(boxes));
};