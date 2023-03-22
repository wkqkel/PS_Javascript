const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n')

const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;
console.log(hour + ' ' + minute)