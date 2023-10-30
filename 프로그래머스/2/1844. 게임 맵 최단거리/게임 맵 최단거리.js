// dfs - 시간초과
// function solution(maps) {
//     const init = 1000000;
//     let answer = init;
//     const dx = [0,0,1,-1];
//     const dy = [1,-1,0,0]
//     const maxX = maps.length - 1;
//     const maxY = maps[0].length -1;
    
//     function dfs(L,x,y){
//         if(x === maxX && y === maxY){
//             answer = Math.min(answer, L + 1)
//             return;
//         }else{
//            for(let i = 0; i < 4; i++) {
//                const nx = x + dx[i];
//                const ny = y + dy[i];
//                if(nx >=0 && nx <= maxX && ny >= 0 && ny <= maxY &&maps[nx][ny] ===1) {
//                  maps[nx][ny] = 0;
//                  dfs(L+1,nx,ny)
//                  maps[nx][ny] = 1;
//                }
//            } 
//         }
//     }
    
//     dfs(0,0,0)
//     return answer === init ? -1 : answer;
// }

// bfs
function solution(maps) {
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0]
    const maxX = maps.length - 1;
    const maxY = maps[0].length -1;
    const ch = maps;
    const init = 1000000;
    let answer = init;
    
    const queue = [];
    queue.push([0,0,1])
    
    while(queue.length > 0) {
      const [x,y, L] = queue.shift();
      if(x === maxX && y === maxY) {
          return L;
      }
      for(let i=0; i < 4; i++) {
           const nx = x + dx[i];
           const ny = y + dy[i];
           if(nx >=0 && nx <= maxX && ny >= 0 && ny <= maxY &&maps[nx][ny] ===1) {
             maps[nx][ny] = 0;
             queue.push([nx,ny,L+1])
           }
      }
    }
    
    return -1;
}