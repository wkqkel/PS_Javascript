function solution(n) {
    if([1,2].includes(n)) return 1; 
    
    const arr = Array(~~(n/2)+1).fill(1).map((v,i)=> v + i)
    let count = left = right = 0;
    while(right !== arr.length) {
       const sum = arr.slice(left, right+1).reduce((acc,cur)=> acc + +cur,0);
       
       if(sum === n) count++
       if(sum <= n) right++
       if(sum >= n) left++
    }

    return count + 1; // n이 1이나 2일땐 +1해주면 안됨. early return으로 예외처리
}

// 15보다 클때까지 뒤에 더해
// 중간에 같으면 count++ 
// 15넘어가면 작을때까지 빼
// 중간에 같으면 
// 15보다 작아지면, 다시 뒤에꺼더해
// 그리고 right가 끝에 다달고 left가 
 
// 절반까지만 하면됨.