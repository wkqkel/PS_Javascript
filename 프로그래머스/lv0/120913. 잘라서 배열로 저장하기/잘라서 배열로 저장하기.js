function solution(my_str, n) {
    const ans = [];
    for(let i=0; i<my_str.length; i+=n){
        ans.push(my_str.slice(i,i+n))
    }
    return ans
}