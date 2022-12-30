function solution(babbling) {
const canArr = ["aya", "ye", "woo", "ma"]
const ans =[]
for(let i=0; i<babbling.length; i++){
    let item = babbling[i];   
    while(canArr.some(v=> item.startsWith(v))){
       item = item.split(canArr.find(v=> item.startsWith(v)))[1] || ''
    }
    ans.push(item)
}
    return ans.filter(v => !v).length
}