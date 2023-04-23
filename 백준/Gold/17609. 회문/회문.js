const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').slice(1)

function isPalindrome (str){
  return str === str.split('').reverse().join('');
}

let res = ''
for(let str of input) {
  if(isPalindrome(str)) {
    console.log(0);
    continue;
  }

  let found = false;
  let n = str.length
  for(let i = 0; i< parseInt(n/2); i++){
    if(str[i]!== str[n-i-1]){ // 대칭이 아닌 인덱스를 찾은 경우
      // 앞쪽에 있는 원소를 제거한 뒤 회문 검사
      if(isPalindrome(str.slice(0,i)+str.slice(i+1))) found = true;
      if(isPalindrome(str.slice(0,n-i-1)+str.slice(n-i,n))) found = true;
      break
    }
  }
  if (found) console.log(1)
  else console.log(2)
}
