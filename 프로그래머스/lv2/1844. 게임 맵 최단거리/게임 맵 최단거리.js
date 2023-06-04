function solution(maps){
    const yLen = maps.length;
    const xLen = maps[0].length;
    const goalX = xLen - 1;
    const goalY = yLen - 1;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = [];
    queue.push([0, 0, 1])

    while(queue.length) {
        const [curY,curX, move] = queue.shift();
        
        if(curX===goalX && curY===goalY) return move;
        for(let i=0; i<4;i++){
            const nx = curX + dx[i];
            const ny = curY + dy[i];
            
            if(nx>=0 && nx<xLen && ny>=0 && ny<yLen && maps[ny][nx]){
                maps[ny][nx] = 0;
                queue.push([ny,nx,move+1])
            }
        }
    }
    return -1;
}


// function solution(maps) {
//     const n = maps[0].length;
//     const m = maps.length;
//     let ans = [];
//     let visited = Array(m).fill().map(() => Array(n).fill(false));
    
//     if(!maps[m-2]?.[n-1]&& !maps[m-1]?.[n-2]) return -1;
//     const canGo = (x,y) => maps[x]?.[y] && !visited[x][y]
//     function dfs(x,y,sum){
//         if(!canGo(x,y) || sum > n * m) return;
//         if(x===m-1 && y=== n-1){
//             return ans.push(sum)
//         }
//         visited[x][y] = true;
//         dfs(x+1,y,sum+1)   
//         dfs(x,y+1,sum+1)
//         dfs(x-1,y,sum+1) 
//         dfs(x,y-1,sum+1)
//         visited[x][y] = false
//     }

//     dfs(0,0,0)
//     return ans.length === 0 ? -1 : Math.min(...ans) + 1;
// };

        