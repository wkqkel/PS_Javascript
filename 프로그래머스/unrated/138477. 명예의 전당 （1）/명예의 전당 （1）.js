function solution(k, score) {
    const arr = [];
    return score.map((v,i)=>{
       return score.slice(0,i+1).sort((a,b)=> b-a).slice(0, k).at(-1)
    })
    // const result = []
    // let arr = [];
    // for(let x of score) {
    //     if(x > arr[arr.length - 1] | !arr[0]) {
    //         arr.push(x);
    //         arr.sort((a,b)=> b-a);
    //         arr = arr.slice(0,k)
    //     }
    //     result.push(arr[arr.length -1])
    // }
    // return result;
}