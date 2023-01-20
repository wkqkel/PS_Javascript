function solution(absolutes, signs) {
   return absolutes.reduce((acc,cur,idx)=> acc+ (cur * (+signs[idx] || -1)),0)
}