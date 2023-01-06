function solution(s) {
    let x = s[0]
    let count = [0,0]
    let ans = []
    for(let i=0; i < s.length; i++) {
        x===s[i] ? count[0]++ :count[1]++
        const startIdx = ans.reduce((acc,cur)=> acc+cur.length,0)
        if(count[0]===count[1]) {
            ans.push(s.slice(startIdx,i+1))
            count = [0,0]
            x = s[i+1]
        } else{
            if(i===s.length-1) ans.push(s[i])
        }
    }
    return ans.length
    
    
    
    
    
//     let first = 1
//     let rest = 0

//     const res = []
//     for(let i=1; i<s.length; i++){
//        const cur = res.reduce((acc,cur)=> acc+ cur.length,0)
   
//       s[cur+1]===s[0] ? first++ : rest++;
//       if(first===rest) res.push(s.slice(cur+1,i))
//     }
//     return res
}