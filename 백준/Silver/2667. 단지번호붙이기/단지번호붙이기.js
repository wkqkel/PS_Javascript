/**
1. 아이디어
- 2중for문 -> if(1&&방문X) -> dfs호출
- 4방향탐색 - dfs깊이 반환
- res에 담기
- res길이와 정렬한 후 출력

2. 시간복잡도
- DFS : O(V+E)
- V: N * N
- E: 4 * V
- V+E = 5V = 5 * N * N = 5 * 25 * 25 < 2억 => 가능

3. 자료구조
- 방문: bool[][]
- 결과: int[]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const n = +input[0]
const map = input.slice(1).map(v=> v.split('').map(Number));

const ch = Array.from({length: n}, ()=>Array.from({length: n},()=>false));
const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

let each = 0;
const res = [];

function dfs(x,y){
    each += 1;
    for(let k = 0; k<4;k++){
        const nx = x + dx[k];
        const ny = y + dy[k];
        const inArea = 0 <= nx && nx < n && 0 <= ny && ny < n
        if(inArea && map[nx][ny] ===1 && ch[nx][ny] === false) {
            ch[nx][ny] = true;
            dfs(nx, ny)
        }
    }
}
for(let i = 0; i<n;i++){
    for(let j= 0; j<n;j++){
        if(map[i][j]===1&&ch[i][j]===false){
            ch[i][j]=true;
            each = 0;
            dfs(i,j)
            res.push(each)
        }
    }
}
res.sort((a,b)=>a-b);
console.log(res.length);
for(let i=0; i<res.length;i++){
    console.log(res[i])
}