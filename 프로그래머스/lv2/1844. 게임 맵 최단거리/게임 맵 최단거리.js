function solution(maps) {
    const goal = {x: maps[0].length -1, y: maps.length -1};
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const stack = [];
    stack.push([0,0,1]);
    
    while(stack.length){
        const [curX,curY,move] = stack.shift();
        if(curX === goal.x && curY === goal.y) return move;
        for(let i = 0; i < 4; i++){
            const nx = curX + dx[i];
            const ny = curY + dy[i];
            
            if(nx>=0 && nx<=goal.x && ny>=0 && ny<=goal.y && maps[ny][nx]){
                maps[ny][nx] = 0;
                stack.push([nx,ny,move+1])
            }
        }
    }
    return -1;
}