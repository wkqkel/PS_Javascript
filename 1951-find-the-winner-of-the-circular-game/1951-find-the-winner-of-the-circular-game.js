/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    // const arr = new Array(n).fill(1).map((v,i)=>v+i);
    // let pos = 0;

    // while(arr.length > 1) {
    //     pos += k -1;
    //     if(pos>= arr.length) pos %= arr.length;
    //     arr.splice(pos,1);
    // }

    // return arr[0]

    // 풀이2
    const arr = new Array(n).fill(1).map((v,i)=>v+i);
    while(arr.length) {
        if(arr.length === 1) return arr[0]

        for(let i = 1; i<k; i++) arr.push(arr.shift());
        arr.shift();
    }
};