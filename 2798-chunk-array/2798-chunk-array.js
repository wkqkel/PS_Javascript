/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
function chunk(arr,size){
    const res = []
    for(let i=0; i<arr.length; i++){
       if(i%size===0) res.push([]);
        res[res.length-1].push(arr[i])
    }
    return res
}