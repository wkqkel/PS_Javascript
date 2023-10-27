const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n"); //split을 해서 input은 항상 배열이됨

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);
function solution(A, B) {
  //write your code

  console.log(A / B);
}
