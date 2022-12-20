function solution(s) {
    return s.split(' ')
            .map((item,index, array)=> item==='Z'? -array[index-1]:item)
            .reduce((acc,cur)=> acc + +cur,0);
}