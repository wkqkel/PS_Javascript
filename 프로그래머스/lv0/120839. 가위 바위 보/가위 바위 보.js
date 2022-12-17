function solution(rsp) {
 return  [...rsp].reduce((acc,cur)=> acc+WIN_RSP_MAP[cur],'')
}

const WIN_RSP_MAP = {
    2: 0,
    0: 5,
    5: 2,
}