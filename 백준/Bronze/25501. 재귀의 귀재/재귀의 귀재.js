const fs = require("fs");

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

function recursion(s,l,r,c) {
  if(l >= r) return {v: 1, c};
  else if(s[l] !==s[r]) return {v: 0, c};
  else return recursion(s, l+1, r-1,c+1)
}

function isPalindrome(s){
  return recursion(s,0 ,s.length -1, 1)
}

console.log(input.map(s=> {
  const {v,c} = isPalindrome(s)
  return v + ' ' + c
}).join('\n'))