function solution(s) {
    let first = ''
    let ans = cnt = 0;
    for (let x of s) {
        if(!first) first = x;
        cnt += first === x ? 1 : -1;
        if(!cnt) first = '', ans++;
    }
    return !!cnt + ans
    
    // let x = s[0]
    // let count = [0,0]
    // let ans = []
    // for(let i=0; i < s.length; i++) {
    //     x===s[i] ? count[0]++ :count[1]++
    //     const startIdx = ans.reduce((acc,cur)=> acc+cur.length,0)
    //     if(count[0]===count[1]) {
    //         ans.push(s.slice(startIdx,i+1))
    //         count = [0,0]
    //         x = s[i+1]
    //     } else{
    //         // 남은 문자는 그냥 마지막 하나만 들어가도 카운트이기때문에 성립한 것.
    //         if(i===s.length-1) ans.push(s[i])
    //     }
    // }
    // return ans.length
}