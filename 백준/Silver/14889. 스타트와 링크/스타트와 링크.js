/** 
1. 아이디어
- n/2를 뽑아야함.
- 방문했으면 안뽑음.
- L === 2/n일때
- startTeam를 이외는 end팀
- 두개의 능력치값을 구해서,
- 최소값을 갱신
- 넘겨주려고 했는데, 이미 추가됐던 것의 값을 넘겨야해서 바로 떠오르지않음 -> 추후 리팩터링
2. 시간복잡도
- L^2 : 능력치계산
- L * (L-1) * (L-2) ... (L/2) : 팀구하기 >> 보통 1초당 8팩토리얼까지 가능 -> 반이니까 16팩토리얼 -> 2초니까 32팩토리얼 이라고 치면 n은 최대 20이므로 가능할듯 보임
- 
3. 자료구조
- visited: bool[]
- L: 레벨
- startTeamStats: number
- endTeamStats: number
- min: number
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const map = input.slice(1).map(v=>v.split(' ').map(Number));

const visited = Array.from({length:n},()=>false);
let min = 10000000

function recur(L,x){
  if(L===n/2) {
    let startTeamStats = 0
    let endTeamStats = 0
    
     for(let i = 0; i<visited.length;i++){
         for(let j=0;j<visited.length;j++){
           if(visited[i] && visited[j]) {
             startTeamStats += map[i][j]
          } 
          if(!visited[i] && !visited[j]){
             endTeamStats += map[i][j]
          }
      }
    }
    const diff = Math.abs(startTeamStats - endTeamStats);
    min = Math.min(min, diff)
    return
  }
  for(let i = x; i<n;i++) {
    if(!visited[i]) {
      visited[i] = true;
      recur(L+1,i);
      visited[i] = false;
    }
  }
}

recur(0,0)

console.log(min)