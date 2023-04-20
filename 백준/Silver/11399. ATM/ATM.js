const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const arr= input[1].split(' ').sort((a,b)=>a-b)
const sum = arr => arr.reduce((a,b)=>+a + +b,0)
console.log(arr.reduce((acc,cur,idx,list)=> acc+ +cur + sum(list.slice(0,idx)) ,0))
