const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split(' '); // 1줄인경우
const input = fs.readFileSync(filePath).toString().trim().split("\n"); // 여러줄인경우

const [NM, ...TREES] = input;
const N = NM.split(" ")[0];
const M = NM.split(" ")[1];
const trees = TREES[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getSlicedTreeSum = (height) => {
  return trees.reduce((acc, cur) => acc + Math.max(cur - height, 0), 0);
}; // NlogN

let left = 0;
let right = trees[N - 1];
let answer = Number.MIN_SAFE_INTEGER;
// [ 4, 26, 40, 42, 46 ]
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  const sum = getSlicedTreeSum(mid);

  if (sum >= M) {
    if (mid > answer) answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);