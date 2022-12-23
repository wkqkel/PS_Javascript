function solution(nums) {
    // const map = new Map();
    // for (let x of nums){
    //     map.set(x, (map.get(x)||0) + 1 );
    // }
    // return Math.min(map.size, nums.length/2)
    return Math.min(new Set(nums).size, nums.length/2)
}