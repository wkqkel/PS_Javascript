const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
const arrayA = input[1].split(" ").map(Number);
let min = 1000000;
let max = -1000000;

solution(arrayA);
function solution(A) {
  for (let i = 0; i < N; i++) {
    if (A[i] > max) {
      max = A[i];
    }
    if (A[i] < min) {
      min = A[i];
    }
  }
  console.log(`${min} ${max}`);
}
