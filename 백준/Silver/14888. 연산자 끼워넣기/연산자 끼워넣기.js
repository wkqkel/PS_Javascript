const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const map = input[2].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
const n = arr.length

const ops = ['+', '-','*','/']

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER
function fn(L,sum){
  if(L === n - 1) {
    if(sum < min) min = sum
    if(sum > max) max = sum
    return
  }
  for(let i = 0; i <map.length;i++){
    if(map[i] > 0){
      map[i]--
      fn(L+1, cal(sum, ops[i], arr[L+1]))
      map[i]++
    }
  }
}
fn(0,arr[0])

if(max === Number.MIN_SAFE_INTEGER) max = min
if(min === Number.MAX_SAFE_INTEGER) min = max

console.log(max + '\n' + min)

function cal(a,op,b){
  switch (op){
    case '+':
      return a+b
    case '-': 
      return a-b
    case '*':
      return a*b
    case '/':
      if(a < 0 && b> 0){
       return Math.floor(a * -1 / b) * -1
      }
      return Math.floor(a/b)
  }
}