
function solution(board) {
    let res = 0
  
    for(let i = 0; i< board.length; i++){
        for(let j= 0; j< board[i].length; j++){
            if((!board[i][j] 
               && !(board[i-1]||[])[j-1]
               && !(board[i-1]||[])[j]
               && !(board[i-1]||[])[j+1]
               && !board[i][j-1]
               && !board[i][j+1]
               && !(board[i+1]||[])[j-1]
               && !(board[i+1]||[])[j]
               && !(board[i+1]||[])[j+1])) res++
        }
    }
 
    return res
}