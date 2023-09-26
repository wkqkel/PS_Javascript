/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const record = []
    const operate = (x) => {
        if (Number.isInteger(+x)) {
            return record.push(+x)
        }
        if (x === "+") {
            return record.push(record.at(-2) + record.at(-1))
        }
        if (x === 'D') {
            return record.push(record.at(-1) * 2)
        }
        if (x === 'C') {
            return record.pop()
        }
    }

    for (let x of operations) {
        operate(x)
    }
    return record.reduce((a, b) => a + b, 0)

};