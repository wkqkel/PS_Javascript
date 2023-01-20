function solution(phone_number) {
   // 1. map과 join
   // return [...phone_number].map((v,i,{length})=> i>=length-4 ? v : '*').join("")
  
  // 2. repeat와 slice
  // slice 음수 인덱스는 배열의 끝에서부터 몇번째인지를 나타냄.
  // 두번째 인자는 default가 length
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
}