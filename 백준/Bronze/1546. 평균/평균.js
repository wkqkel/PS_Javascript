const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n')

const n = +input[0]
const score = input[1].split(' ').map(Number);
const M = Math.max(...score);

const newScore = score.map(v=> v/M*100);

const average = newScore.reduce((a,b)=> a+b) / newScore.length 

console.log(average)