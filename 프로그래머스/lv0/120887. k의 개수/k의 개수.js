function solution(i, j, k) {
    // let ans = 0
    // for(let cur=i; cur<=j; cur++){
    //     ans += [...(cur+'')].filter(v=> +v===k).length
    // }
    // return ans
    
    // let a = '';
    // for (i; i<=j; i++){
    //     a += i;
    // }
    // return a.split(k).length - 1
    
    return  Array(j-i+1).fill(i).map((v,i)=> v+i).join('').split(k).length - 1
}