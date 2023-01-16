function solution(ingredient) {
    const stack = [];
    let cnt = 0
    for (const v of ingredient){
        stack.push(v)
        // 전체문자열 또는 array를 조회하면 시간초과
        const last = stack.slice(-4).join('')
        if(last === '1231') {
            cnt++
            stack.splice(stack.length-4,4)
        }
    }
    return cnt
}

//  아래처럼 replace로 하는게 includes보단 성능이 좋았음.
//  let cnt = 0;
//  const hamburger = '1231';
//  let str = ingredient.join('')
//  let replace = str.replace(hamburger, '')
//  while(replace !== str){
//     cnt++
//     str = replace
//     replace = str.replace(hamburger, '')
//  }
// return  cnt