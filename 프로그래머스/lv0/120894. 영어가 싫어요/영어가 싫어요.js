const NUMBERS_MAP = {
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
    // let ans = numbers
    // for (let [key,value] of Object.entries(NUMBERS_MAP)){
    //   ans = ans.replaceAll(key, value)
    // }
    // return +ans
    
    // return +Object.keys(NUMBERS_MAP)
    //               .reduce((acc,cur,idx)=> acc.replaceAll(cur, idx), numbers)
    
    return +numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v)=> NUMBERS_MAP[v])
}