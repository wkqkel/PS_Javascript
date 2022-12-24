function solution(progresses, speeds) {


    const ans = {date:0, arr:[]}
    const arr = progresses.map((v,i)=> (Math.ceil((100-v)/speeds[i]))) 
    for(let v of arr){
        if(ans.date >= v){
            ans.arr[ans.arr.length -1] += 1
        } else {
            ans.arr.push(1)
        }
        ans.date = Math.max(ans.date, v)
    }
    return ans.arr
}