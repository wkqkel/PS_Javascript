function solution(n) {
    let num = n; 
    let answer = 0; 
    let board = [];
    
    function hasAnyQueensConflicts(row){ 
        for(let i=0; i<row; i++) { 
            if(board[i] === board[row]) { // 이전말과 같은 행 같은 열인지 체크
                return true;
            }
            if(Math.abs(board[row] - board[i]) === row-i){ // 대각선 체크
                return true;
            }
        }
        return false;
    }
    function findNQueen(row){
        if(row === num){
                answer++;
                return;
        }
        for(let col=0; col<num; col++){
            board[row] = col;
            if(!hasAnyQueensConflicts(row)){ // 충돌 안한다면
                findNQueen(row+1);
            }
        }
    }

    findNQueen(0);
    return answer
}


