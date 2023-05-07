let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function findMax부분수열의합과갯수(arr, X) {
  const n = arr.length;
  const slicedArr = arr.slice(0, X)
  let start = 0;
  let end = X; // 2
  let sum = slicedArr.reduce((a, b) => a + b);
  let max = sum
  let maxCnt = 1;
  while (end < n) {
    sum = sum - arr[start++] + arr[end++];
    if (sum === max) {
      maxCnt++;
    }
    if (sum > max) {
      maxCnt = 1;
      max = sum;
    }
  }
  if(max === 0) return console.log('SAD')
  console.log(max+'\n'+maxCnt)
}
findMax부분수열의합과갯수(arr,X)