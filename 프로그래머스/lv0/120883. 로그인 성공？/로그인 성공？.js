function solution(id_pw, db) {
    
    let ans = 'fail'
    db.map(([id,pw])=> {
           if(id_pw[0]===id) ans='wrong pw'
           if(id_pw[0]===id && id_pw[1]===pw) return ans='login'
        }
    )
    return ans
}