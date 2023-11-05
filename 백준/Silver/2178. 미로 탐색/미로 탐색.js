/** 
1. 아이디어
- 그래프탐색 : bfs
- 큐에 초기값 , L넣고 시작
- 빼면서 4방향 탐색
- n,m에 도착하면 최솟값,L 비교
2. 시간복잡도
- O(V+E)
- 5V = 5 * 100 * 100 50000 < 2억 >> 가능
3. 자료구조
- 큐: [int,int][]
- 방문: int[][]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const map = input.slice(1).map(v=> v.split('').map(Number));

let ans = Number.MAX_SAFE_INTEGER;
let q = [];
let visit = Array.from({length: n}, ()=> Array(m).fill(false));
visit[0][0] = 1;
q.push([0,0,1]);

const dx = [0,0,1,-1];
const dy = [1,-1,0,0]

while(q.length) {
  const [x,y,L] = q.shift();
  if(x === n-1 && y === m-1) {
    ans = Math.min(ans,L)
  }
  for(let k =0;k <4;k++){
    const nx = x + dx[k]
    const ny = y + dy[k]

    if(0<=nx && nx < n && 0<=ny && ny < m && map[nx][ny] === 1 && visit[nx][ny] === false){
      visit[nx][ny] = true;
      q.push([nx,ny,L+1])
    }
  }
}

console.log(ans);

/** 
고민했던 포인트
1. 일부러 bfs로 풀려했는데 최솟값을 어떻게 초기화하면서 갱신해주지. 
  -> 처음에 전역변수로 생각했는데 그 값을 초기화해줄 타이밍이 없고 0으로 해도안됨.
  -> L을 큐에 같이 넣음 
  -> L 초기값은 1 왜냐하면 처음엔 당연히 하나 선택한 것이니!
2. x === n-1 && y === m-1과 같은 종료조건 
  -> 초기값을 0으로 하고 x === n && y ===m처럼 해봤는데 안됨
3. 그리고 종료후에 리턴해도 되나 -> 안됨. 다른 길에선 더빠를 수 있기때문
*/