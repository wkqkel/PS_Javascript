function solution(want, number, discount) {
    const wantStr = want.map((v,i)=> v.repeat(number[i])).sort().join('')
    let count = 0
    for(let i=0; i<discount.length; i++){
      const checkStr = discount.slice(i, i+10).sort().join('')
      if(wantStr === checkStr) {
          count++
      }
    }
    return count
}