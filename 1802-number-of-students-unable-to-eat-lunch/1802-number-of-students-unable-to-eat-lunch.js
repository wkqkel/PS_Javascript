/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    const canEat = () => {
        const getMap = (arr) => arr.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1
            return acc
        }, {})


        const map1 = Object.keys(getMap(students));
        const map2 = Object.keys(getMap(sandwiches));

        if (map1.length === 1 && +map1[0] !== sandwiches[0]) {
            return false
        }

        return (map1.length > 0)
    }
    let count = 0
    while (canEat()) {
        // console.log(students, sandwiches)
        const head = students.shift();
        if (head === sandwiches[0]) {
            sandwiches.shift();
        } else {
            students.push(head)
        }
        count++
    }

    return students.length
};