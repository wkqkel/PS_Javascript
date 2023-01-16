function solution(numbers) {
    if(!Math.max(...numbers)) return '0'
    return numbers.map(v=>v.toString())
                  .sort((a,b)=> (b+a)-(a+b)).join('') 
}