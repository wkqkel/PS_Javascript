const fs = require("fs");

const [N,M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

// const [N,M] = [3,2]

/** 
1. 아이디어
- 백트래킹 
- 재귀함수안에서 for돌면서 숫자 선택(방문여부 확인)
- 재귀함수에서 M개를 선택했을 때 프린트

2. 시간복잡도
- n! > 10이하이므로 가능

3. 자료구조
- 선택배열 - int[]
- 방문배열 - bool[]

*/

function solution(n,m){
  const answer = []
  const arr = [];
  const ch = Array.from({length: n+1},()=>false);

  function dfs(L){
    if(L === m) {
      console.log(arr.join(' '))
      return;
    }
    for(let i = 1; i<=n;i++){
      if(!ch[i]) {
        ch[i] = true;
        arr.push(i);
        dfs(L+1);
        ch[i] = false;
        arr.pop();
      }
    }
  }

  dfs(0);
}

solution(N,M)