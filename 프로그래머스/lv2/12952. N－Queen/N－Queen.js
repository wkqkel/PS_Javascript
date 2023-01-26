function check(board, row){
    for(let i = 0; i < row; i++){
        if(board[i]===board[row]) return false;
        if(Math.abs(board[row]-board[i])===row-i) return false;
    }
    return true;
}

function search(board, row) {
    let n = board.length;
    let count = 0;
    if(row === n) return 1;
    for(let col = 0; col < n; col++){
        board[row] = col;
        if(check(board, row)) {
            count += search(board, row + 1);
        }
    }
    return count;
}

function solution(n){
    return search(Array(n).fill(0), 0);
}