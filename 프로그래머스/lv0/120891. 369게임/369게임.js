function solution(order) {
 // return [...(order+"")].filter(item=>[3,6,9].includes(+item)).length
    return (order+"").replaceAll(/[^369]/g,'').length
}