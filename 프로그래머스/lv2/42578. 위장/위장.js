function solution(clothes) {
    const map = new Map()
    clothes.map((item)=> {
        const data = map.get(item[1]) || []
        map.set(item[1], [...data,item[0]])
    })
    return [...map.values()]
                .reduce((acc,cur)=> acc * ( cur.length + 1),1) - 1;
}