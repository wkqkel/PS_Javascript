function solution(bin1, bin2) {
    // parseInt: n => 10진법
    // toString: 10 => n진법
    return (parseInt(bin1,2) + parseInt(bin2,2)).toString(2)
}