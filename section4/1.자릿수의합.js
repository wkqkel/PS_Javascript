function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// function solution(n, arr) {
//   const sumArr = arr.map(
//     (v) => +[...String(v)].reduce((acc, cur) => acc + +cur, 0)
//   );

//   const isMaxSum = (v, i) => Math.max(...sumArr) === sumArr[i];

//   return Math.max(...arr.filter(isMaxSum));
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));
