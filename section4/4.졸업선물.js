function solution(m, arr) {
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let ans = 0;
  for (let saleIdx = 0; saleIdx < arr.length; saleIdx++) {
    for (let i = 0; i < arr.length; i++) {
      const price = arr[i][0] + arr[i][1];
      if (m >= price) {
        m -= price;
        continue;
      }
      ans = Math.max(ans, i + 1);
      break;
    }
  }
  return ans;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
