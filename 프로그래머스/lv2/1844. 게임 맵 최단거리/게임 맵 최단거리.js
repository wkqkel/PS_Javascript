

function solution(maps) {
    const goal = [maps[0].length-1,maps.length-1];

    const dx = [-1, 1, 0, 0]; 
    const dy = [0, 0 ,-1, 1]; 
    
    const queue = [];
    queue.push([0,0,1])
     
   
    while(queue.length){
        const [curY,curX,move] = queue.shift();
        if(curX===goal[0]&&curY===goal[1]) return move;
        
        for(let i = 0; i<4;i++){
            const nx = curX + dx[i];
            const ny = curY + dy[i];
            
            if(nx>=0 && nx<=goal[0] && ny>=0 && ny<=goal[1] && maps[ny][nx]){
                maps[ny][nx] = 0;
                queue.push([ny,nx,move+1])
            }
        }
    }
    return -1
}