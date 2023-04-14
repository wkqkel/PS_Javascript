const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split(' '); // 1줄인경우
const input = fs.readFileSync(filePath).toString().trim().split("\n"); // 여러줄인경우

let count = input[0];
let numbers = input.slice(1) 

numbers.sort((a,b)=> a-b) // 베스트 - O(n) / 평균 - O(nlogn) / 워스트 - O(nlogn)
console.log(numbers.join('\n'))