function solution(my_string) {
    // return my_string
    //         .replace(/[^0-9]/g, ' ')
    //         .split(' ')
    //         .reduce((acc,cur)=> acc + (+cur||0),0)
    
    // \d+는 '하나 혹은 그 이상 연결된 숫자 `
    return my_string.split(/\D+/).reduce((acc,cur)=> acc + +cur, 0)
}