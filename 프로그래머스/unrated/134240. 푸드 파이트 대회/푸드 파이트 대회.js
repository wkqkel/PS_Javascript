function solution(food) {
    const [water, ...rest] = food
    let half = ''
    rest.map(v=> Math.floor(v/2))
        .map((v,i)=> {
            for(let j=0; j<v;j++){
                half += (i+1)
            }})
    return half + 0 + [...half].reverse().join('')
}