const NUMBER_MAP = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
}

function solution(numbers) {
    let ans = numbers
    for (let [key,value] of Object.entries(NUMBER_MAP)){
      ans = ans.replaceAll(key, value)
    }
    return +ans
}