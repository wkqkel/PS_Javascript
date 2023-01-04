function solution(num, total) {
    //     let left = 1;
    //     let right = num
    //     let sum = num*(num+1) / 2

    //     while(sum!==total){
    //        sum = sum<=total 
    //            ? sum - left++ + ++right 
    //            : sum + --left - right--
    //     }
    //     return Array(num).fill(left).map((v,i)=>v+i)
    
    // 1씩 증가하는 등차수열이므로 중간값에서 갯수/2를 빼거나 더하면 min과 max가 나옴.
    // 짝수일수있는데 이땐 중간값 두개중에 큰값에서 갯수/2 를 빼면 min 나옴. Math.ceil
    const min = Math.ceil(total/num) - Math.floor(num/2)
    const max = Math.floor(total/num) + Math.floor(num/2)
    return Array(num).fill(min).map((v,i)=>v+i)
}