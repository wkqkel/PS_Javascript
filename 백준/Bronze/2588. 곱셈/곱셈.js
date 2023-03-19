const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.map(Number);
solution(input[0], input[1]);
function solution(A, B) {
  const stringB = String(B);
  // 385 -> ["3","8","5"] 문자열은 이렇게 배열처럼 볼수있고 인덱스로 뽑아쓰기가능
  const one = +stringB[2]; // 넘버안하고 + 붙여주면 더 간단히 숫자로 만듬
  const ten = +stringB[1];
  const hun = +stringB[0];
  console.log(A * one);
  console.log(A * ten);
  console.log(A * hun);
  console.log(A * B);
}