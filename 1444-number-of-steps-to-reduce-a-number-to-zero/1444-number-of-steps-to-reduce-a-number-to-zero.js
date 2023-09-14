/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    const getNum = (n = num) => {
        if (n === 0) return 0;
        return 1 + getNum(n % 2 === 0 ? n / 2 : n - 1)
    }

    return getNum()
};