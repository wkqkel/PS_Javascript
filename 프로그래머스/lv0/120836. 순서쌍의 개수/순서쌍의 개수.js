function solution(n) {
    const divisors = Array(n).fill(0).map((item,index)=>index+1).filter(item=> n % item===0)
    return divisors.length
}