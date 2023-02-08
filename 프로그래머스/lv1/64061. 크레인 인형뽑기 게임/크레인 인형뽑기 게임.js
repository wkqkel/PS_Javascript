function solution(board, moves) {
    // 먼저 들어온게 늦게 나감 stack
    const stack = [];
    let count = 0
    for(let move of moves) {
       for(let j = 0; j < board.length; j++){
           if(!board[j][move-1]) continue;
           stack.push(board[j][move-1])
           board[j][move-1] = 0;
           if(stack[stack.length - 1] === stack[stack.length -2]) {
               count += 2
               stack.splice(-2,2)
           }
           break;
       }
    }
    return count;
    
    // 인프런 강의 풀이
//     const stack = [];
//     let ans = 0;
    
//     moves.forEach(pos =>{
//         for(let i=0; i<board.length; i++){
//             if(board[i][pos-1]!==0){
//                 let tmp = board[i][pos-1];
//                 board[i][pos-1] = 0;
//                 if(tmp === stack[stack.length - 1]){
//                     stack.pop();
//                     ans += 2;
//                 } else {
//                     stack.push(tmp)
//                 }
//                 break;
//             }
//         }
//     });
//     return ans
}

// [[0,0,0,0,0],
//  [0,0,1c,0,3b],
//  [0,2f,5,0,1d],
//  [4a,2,4,4h,2],
//  [3e,5,1,3,1]]

// 4 3 1 1 3 2 gX 4