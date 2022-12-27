const AROUND = [[-1,-1],[-1,0],[-1,1],
                [0,-1],[0,0],[0,1],
                [1,-1],[1,0],[1,1]]
function solution(board) {
    let res = 0
    board.map((row,y)=> row.map((it, x) => !AROUND.some(([ox,oy])=> board[oy+y]?.[ox+x]) && res++))

    // for(let i = 0; i< board.length; i++){
    //     for(let j= 0; j< board[i].length; j++){
    //         if((!board[i][j] 
    //            && !(board[i-1]||[])[j-1]
    //            && !(board[i-1]||[])[j]
    //            && !board[i-1]?.[j+1]
    //            && !board[i][j-1]
    //            && !board[i][j+1]
    //            && !board[i+1]?.[j-1]
    //            && !board[i+1]?.[j]
    //            && !board[i+1]?.[j+1])) res++
    //     }
    // }
 
    return res
}