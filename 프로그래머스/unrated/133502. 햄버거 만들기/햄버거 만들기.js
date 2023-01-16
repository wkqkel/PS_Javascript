function solution(ingredient) {
    const stack = [];
    let cnt = 0
    for (const v of ingredient){
        stack.push(v)
        const last = stack.slice(-4).join('')
        if(last === '1231') {
            cnt++
            stack.splice(stack.length-4,4)
        }
    }
    return cnt
}


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